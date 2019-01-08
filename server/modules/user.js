const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Message = require("./message");
var userSchema = new  mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    profileImg:{
        type: String,
    },
    message:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Message"
    }]
})
//password validation, if the password has been modified then it will rehash the password and save it 
//to database
userSchema.pre("save",async function(next){
    try{
        if(!this.isModified("password")){
            return next();
        }
        let hashedPassword = await bcrypt.hash(this.password,10);//using bcrypt for password hashing
        this.password = hashedPassword;//saving the hashed password to database
        return next();//this function say the code to move on
    }catch(err){
        return next(err);
    }
})
//comparing the user password to database password
userSchema.methods.comparePassword = async function(inputPassword,next){
    try{
        let isMatch = await bcrypt.compare(inputPassword,this.password);
        return isMatch;
    }catch(err){return next(err)}
}

const User = mongoose.model("User",userSchema);
module.exports = User;