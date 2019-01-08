require("dotenv").config();
const express = require("express"),
        bodyParser = require("body-parser"),
        cors = require("cors"),
        Port = 3001,
        app = express(),
        auth = require("./routes/auth"),
        message = require("./routes/messages"),
        authenticate = require("./middleware/authenticate"),
        errorHandler = require("./handlers/errorHandler");
app.use(cors());
app.use(bodyParser.json());

//all the routes are here 
app.use("/api/user",auth);
app.use("/api/user/:id/message",
authenticate.isLoggedIn,authenticate.ensureCorrectUser,
message);
//if any routes not found then 
app.use(function(req,res,next){
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
})
//for handling error
app.use(errorHandler);

app.listen(Port,function(){
    console.log("Starting server on Port "+Port);
})
