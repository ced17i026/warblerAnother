const express = require("express");
const app = express.Router({mergeParams: true});
const messages = require("../handlers/messages");

app.route("/")
    .post(messages.createMessage)
    .get(messages.getAllMessages);
    
app.route("/:message_id")
    .get(messages.getMessage)
    .delete(messages.deleteMessage);
module.exports = app;