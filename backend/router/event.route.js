
const express = require("express")

const { eventModel } = require("../model/event.model")
const { auth } = require("../middleware/auth.middleware")
const { access } = require("../middleware/access.middleware")
const { userModel } = require("../model/user.model")

const eventRouter = express.Router()

eventRouter.get("/", (req, res) => {
	res.json({ msg: "this is event test route" })
})


// access("creator", "viewer"),

// POST Route     access("organizer", "admin"), 


eventRouter.post("/", auth,async (req, res) => {
    const payload = req.body
    const userid = req.username
    console.log(userid)
    try {
        const user = await userModel.findById(userid);
        // console.log(user.username);
        const event = new eventModel({ ...payload, createdBy: userid });
        await event.save();
        res.status(200).send({ msg: "Event has been added" })
    } catch (err) {
        res.status(400).send({ err: err.message })
    }
})

// GET Route   access("user", "organizer", "admin"), 

// eventRouter.get("/", auth,async (req, res) => {
//     try {
//         const createdBy = req.userID
//         let query = {};

//         // Sorting
//         const sortField = req.query.sortField || 'createdAt'; // Default sort field is createdAt
//         const sortOrder = req.query.sortOrder === 'asc' ? 1 : -1; // Default sort order is descending
//         const sortOptions = { [sortField]: sortOrder };

//         // Filtering books created within the last 10 minutes
//         if (req.query.createdWithinLast10Min) {
//             const currentTime = new Date();
//             const tenMinutesAgo = new Date(currentTime.getTime() - 10 * 60000);
//             query.createdAt = { $gt: tenMinutesAgo };
//         }

//         // Filtering books created earlier than the last 10 minutes
//         if (req.query.createdEarlierThan10Min) {
//             const currentTime = new Date();
//             const tenMinutesAgo = new Date(currentTime.getTime() - 10 * 60000);
//             query.createdAt = { $lte: tenMinutesAgo };
//         }

//         const currentTime = new Date();

//         if (req.query.old) {
//             // Find books created 10 minutes ago or earlier
//             const tenMinutesAgo = new Date(currentTime.getTime() - 10 * 60000);
//             const books = await booksModel.find({ createdAt: { $lte: tenMinutesAgo } });
//             res.status(200).send({ msg: 'Books created 10 minutes ago or earlier', books });
//         } else if (req.query.new) {
//             // Find books created less than 10 minutes ago
//             const tenMinutesAgo = new Date(currentTime.getTime() - 10 * 60000);
//             const books = await booksModel.find({ createdAt: { $gt: tenMinutesAgo } });
//             res.status(200).send({ msg: 'Books created less than 10 minutes ago', books });
//         }

//         // console.log(req.role);

//         if (req.role == "creator") {
//             const books = await booksModel.find();
//             res.status(200).send({ msg: 'All books', books });
//         } else {
//             const books = await booksModel.find({ createdBy });
//             res.status(200).send({ msg: 'All books', books });
//         }
//     } catch (err) {
//         res.status(400).send({ err: err.message })
//     }
// })

// PATCH Route         access("admin"),

eventRouter.patch("/:eventID", async (req, res) => {
    const { eventID } = req.params
    const updatePayload = req.body
    try {
        await eventModel.findByIdAndUpdate(eventID, updatePayload)
        res.status(200).send({ message: `Event with ID ${eventID} has been updated` })
    } catch (err) {
        res.status(400).send({ err: err.message })
    }
})

// DELETE Route access("admin"),

eventRouter.patch("/:eventID",  async (req, res) => {
    const { eventID } = req.params
    try {
        await eventModel.findByIdAndUpdate(eventID)
        res.status(200).send({ message: `Event with ID ${eventID} has been updated` })
    } catch (err) {
        res.status(400).send({ err: err.message })
    }
})

module.exports = {
    eventRouter
}
