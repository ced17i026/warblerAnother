const express = require("express"),
        app = express.Router(),
        user = require("../handlers/auth");
    
app.post("/signup",user.singup);
app.post("/signin",user.singin);
module.exports = app;