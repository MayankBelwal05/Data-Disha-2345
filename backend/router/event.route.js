
// const express = require("express")

// const { eventModel } = require("../model/event.model")
// const { auth } = require("../middleware/auth.middleware")
// const { access } = require("../middleware/access.middleware")
// const { userModel } = require("../model/user.model")

// const eventRouter = express.Router()

// // access("creator", "viewer"),

// POST Route     access("organizer", "admin"), 


// eventRouter.post("/", auth,async (req, res) => {
//     const payload = req.body
//     const userid = req.username
//     console.log(userid)
//     try {
//         const user = await userModel.findById(userid);
//         // console.log(user.username);
//         const event = new eventModel({ ...payload, createdBy: userid });
//         await event.save();
//         res.status(200).send({ msg: "Event has been added" })
//     } catch (err) {
//         res.status(400).send({ err: err.message })
//     }
// })

// // GET Route   access("user", "organizer", "admin"), 

// // eventRouter.get("/", auth,async (req, res) => {
// //     try {
// //         const createdBy = req.userID
// //         let query = {};

// //         // Sorting
// //         const sortField = req.query.sortField || 'createdAt'; // Default sort field is createdAt
// //         const sortOrder = req.query.sortOrder === 'asc' ? 1 : -1; // Default sort order is descending
// //         const sortOptions = { [sortField]: sortOrder };

// //         // Filtering books created within the last 10 minutes
// //         if (req.query.createdWithinLast10Min) {
// //             const currentTime = new Date();
// //             const tenMinutesAgo = new Date(currentTime.getTime() - 10 * 60000);
// //             query.createdAt = { $gt: tenMinutesAgo };
// //         }

// //         // Filtering books created earlier than the last 10 minutes
// //         if (req.query.createdEarlierThan10Min) {
// //             const currentTime = new Date();
// //             const tenMinutesAgo = new Date(currentTime.getTime() - 10 * 60000);
// //             query.createdAt = { $lte: tenMinutesAgo };
// //         }

// //         const currentTime = new Date();

// //         if (req.query.old) {
// //             // Find books created 10 minutes ago or earlier
// //             const tenMinutesAgo = new Date(currentTime.getTime() - 10 * 60000);
// //             const books = await booksModel.find({ createdAt: { $lte: tenMinutesAgo } });
// //             res.status(200).send({ msg: 'Books created 10 minutes ago or earlier', books });
// //         } else if (req.query.new) {
// //             // Find books created less than 10 minutes ago
// //             const tenMinutesAgo = new Date(currentTime.getTime() - 10 * 60000);
// //             const books = await booksModel.find({ createdAt: { $gt: tenMinutesAgo } });
// //             res.status(200).send({ msg: 'Books created less than 10 minutes ago', books });
// //         }

// //         // console.log(req.role);

// //         if (req.role == "creator") {
// //             const books = await booksModel.find();
// //             res.status(200).send({ msg: 'All books', books });
// //         } else {
// //             const books = await booksModel.find({ createdBy });
// //             res.status(200).send({ msg: 'All books', books });
// //         }
// //     } catch (err) {
// //         res.status(400).send({ err: err.message })
// //     }
// // })

// // PATCH Route         access("admin"),

// eventRouter.patch("/:eventID", async (req, res) => {
//     const { eventID } = req.params
//     const updatePayload = req.body
//     try {
//         await eventModel.findByIdAndUpdate(eventID, updatePayload)
//         res.status(200).send({ message: `Event with ID ${eventID} has been updated` })
//     } catch (err) {
//         res.status(400).send({ err: err.message })
//     }
// })

// // DELETE Route access("admin"),

// eventRouter.patch("/:eventID",  async (req, res) => {
//     const { eventID } = req.params
//     try {
//         await eventModel.findByIdAndUpdate(eventID)
//         res.status(200).send({ message: `Event with ID ${eventID} has been updated` })
//     } catch (err) {
//         res.status(400).send({ err: err.message })
//     }
// })

// module.exports = {
//     eventRouter
// }

const express = require('express');
const {
  createEvent,
  getEventById,
  updateEvent,
  deleteEvent,
  getAllEvents,
  getEventsByUser,
  getRelatedEventsByCategory
} = require('../controller/eventController');

const eventRouter = express.Router();


// CREATE
eventRouter.post('/', async (req, res) => {
  try {
    const { userId, event } = req.body;
    const createdEvent = await createEvent({ userId, event });
    res.json(createdEvent);
  } catch (error) {
    res.status(400).json({ err });
  }
});

// GET ONE EVENT BY ID
eventRouter.get('/:eventId', async (req, res) => {
  try {
    const event = await getEventById(req.params.eventId);
    res.json(event);
  } catch (error) {
    res.status(400).json({ err });
  }
});

// UPDATE
eventRouter.put('/:eventId', async (req, res) => {
  try {
    const { userId, event, path } = req.body;
    const updatedEvent = await updateEvent({ userId, event, path });
    res.json(updatedEvent);
  } catch (error) {
    res.status(400).json({ err });
  }
});

// DELETE
eventRouter.delete('/:eventId', async (req, res) => {
  try {
    await deleteEvent({ eventId: req.params.eventId, path: req.path });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ err });
  }
});

// GET ALL EVENTS
eventRouter.get('/', async (req, res) => {
  try {
    const { query, limit, page, category } = req.query;
    const events = await getAllEvents({ query, limit, page, category });
    res.json(events);
  } catch (error) {
    res.status(400).json({ err });
  }
});

// GET EVENTS BY ORGANIZER
eventRouter.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { limit, page } = req.query;
    const events = await getEventsByUser({ userId, limit, page });
    res.json(events);
  } catch (error) {
    res.status(400).json({ err });
  }
});

// GET RELATED EVENTS: EVENTS WITH SAME CATEGORY
eventRouter.get('/related/:categoryId/:eventId', async (req, res) => {
  try {
    const { categoryId, eventId } = req.params;
    const { limit, page } = req.query;
    const relatedEvents = await getRelatedEventsByCategory({ categoryId, eventId, limit, page });
    res.json(relatedEvents);
  } catch (error) {
    res.status(400).json({ err });
  }
});

module.exports = {
    eventRouter
}