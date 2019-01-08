require("dotenv").load();
const jwt = require("jsonwebtoken");

//make sure the user is logged in
exports.isLoggedIn = function(req,res,next){
    try{
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,process.env.SECRET_KEY,function(err,decoded){
            if(decoded){
                //i.e if uses is logged in
                return next();
            }else{
                return next({
                    status: 401,
                    message: "Please Log in First",
                });
            }
        })
    }catch(err){
        return next({
            status: 401,
            message: "Please Log in First",
        })
    }
}

exports.ensureCorrectUser = function(req,res,next){
    try{
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,process.env.SECRET_KEY,function(err,decoded){
            if(decoded && decoded._id === req.params.id){
                return next();
            }else{
                return next({
                    status: 401,
                    message: "Unauthorize"
                })
            }
        })
    }catch(err){
        return next({
            status: 401,
            message: "Unauthorize"
        });
    }
}