
const express = require("express")

const { messageModel } = require("../model/message.model")
const { auth } = require("../middleware/auth.middleware")
const { access } = require("../middleware/access.middleware")
const { userModel } = require("../model/user.model")

const messageRouter = express.Router()

// access("creator", "viewer"),

// POST Route     access("organizer", "admin"), 

messageRouter.post("/post", auth,async (req, res) => {
    const msg = req.body.message
    const name = req.username
    console.log("this is msg:",msg)

    console.log("this is",name)
    try {
        const message = new messageModel({ message:msg, createdBy: name});  //userid
        await message.save();
        res.status(200).send({ msg: "Message has been send" })
    } catch (err) {
        res.status(400).send({ err: err.message })
    }
})


messageRouter.get("/get", auth,async (req, res) => {
    try {
        const messages = await messageModel.find();
        res.status(200).send({ msg: "Message has been send",messages })
    } catch (err) {
        res.status(400).send({ err: err.message })
    }
})


module.exports = {
   messageRouter
}
