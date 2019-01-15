const db = require("../modules/mongoConnect");

exports.createMessage = async function(req,res,next){
    try{
        let message = await db.Message.create({
            body: req.body.message,
            user: req.params.id
        })
        let user = await db.User.findById(req.params.id);
        user.message.push(message.id);
        await user.save();
        let foundMessage = await db.Message.findById(message.id).populate("user",{
            username: true,
            profileImg:true
        })
        return res.status(200).json(foundMessage);

    }catch(err){
        return next(err);
    }
}
//this will fetch a particular message and the link is something like api/user/:id/message/:message_id
exports.getMessage = async function(req,res,next){
    try{
        let message = await db.Message.findById(req.params.message_id);
        return res.status(200).json(message);
    }catch(err){
        return next(err);
    }
}
//this will delete the message with particular id
exports.deleteMessage = async function(req,res,next){
    try{
        //mongoose method findByIdAndRemove will not work here cause we have a pre function in our message Schema
        let message = await db.Message.findById(req.params.message_id);
        message.remove();
        return res.status(200).json(message);
    }catch(err){
        return next(err);
    }
}
//this will get all the messages from database
exports.getAllMessages = async function(req,res,next){
    try{
        let messages = await db.Message.find().sort({createdAt: "desc"}).populate("user",{
            username: true,
            profileImg: true
        });
        return res.status(200).json(messages);
    }catch(err){
       return next(err);
    }
}