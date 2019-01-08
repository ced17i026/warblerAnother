const db = require("../modules/mongoConnect");
const jwt = require("jsonwebtoken");

exports.singin = async function(req,res,next){
    try{
        let user = await db.User.findOne({email: req.body.email});
        let isMatch = await user.comparePassword(req.body.password);
        let {_id,username,email} = user;
        
        if(isMatch){
            let token = jwt.sign(
                {
                    _id,
                    username,
                    email
                },
                process.env.SECRET_KEY,
            );
            return res.status(200).json({
                _id,
                username,
                email,
                token
            });
        }
        else{
            return next({
                status: 400,
                message: "Invalid Password/Email"
            })
        }
    }
    catch(err){
        return next({
            ...err,
            status: 400,
            message: "Invalid Password/Email"
        })
    }
};
exports.singup = async function(req,res,next){
    try{
        let user = await db.User.create(req.body);
        let{email,username,profileImg} = user;
        let token = jwt.sign(
            {
                email,
                username,
                profileImg
            },
            process.env.SECRET_KEY
        );
        return res.status(200).json({
            email,
            username,
            profileImg,
            token
        });
    }catch(err){
        if(err.code === 11000){
            err.message = "Sorry, that username or Email is taken"
        };
        return  next({
            ...err,
            status: 400,
            message: err.message,
        });
    }
};