const mongoose = require("mongoose");
const db = require("./mongoConnect");
const User = require("./user");

const messageSchema = new mongoose.Schema(
    {
        body:{
            type: String,
            required: true,
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    },
    {
        timestamps: true,//this will get the time at which message has been created
    }
)

messageSchema.pre("remove", async function(next){
    try{
        //find the userWith that id
        let user = await db.User.findById(this.user);
        //delete the message
        user.message.remove(this.id);
        //save the deleted message array
        user.save();
        return next();
    }catch(err){
        return next(err);
    }
})
const Message = mongoose.model("Message",messageSchema);
module.exports = Message;