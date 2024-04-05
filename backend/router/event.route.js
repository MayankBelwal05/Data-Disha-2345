
const express = require('express');
const eventRouter = express.Router();

const { EventModel } = require('../model/event.model');
const { CategoryModel } = require('../model/category.model');
const { UserModel } = require('../model/user.model');
const { auth } = require('../middleware/auth.middleware');
const { access } = require('../middleware/access.middleware');



// POST route to store event data with relationships
eventRouter.post('/', auth, access("organizer", "admin"), async (req, res) => {
    try {
        // Extract event data from request body
        const eventData = req.body;

        // Check if the user exists
        const user = await UserModel.findById(req.userID);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if the category exists
        const category = await CategoryModel.findById(eventData.category);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        console.log(eventData);

        console.log(category);

        console.log(req.userID);
        // Create event object with relationships
        const event = new EventModel({
            title: eventData.title,
            description: eventData.description,
            location: eventData.location,
            imageUrl: eventData.imageUrl,
            startDateTime: eventData.startDateTime,
            endDateTime: eventData.endDateTime,
            price: eventData.price,
            isFree: eventData.isFree,
            url: eventData.url,
            organizer: req.userID, // Reference to the user who created the event
            category: category._id // Reference to the category of the event
        });

        // Save the event to the database
        await event.save();

        res.status(201).json({ message: "Event created successfully", event });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

eventRouter.get('/', async (req, res) => {
    try {
        let { search, sortBy, category, page, limit } = req.query;
        page = parseInt(page) || 1;
        limit = parseInt(limit) || 10;
        const skip = (page - 1) * limit;

        let query = {};

        // Search
        if (search) {
            query.title = { $regex: new RegExp(search, 'i') };
        }

        // Category filter
        if (category) {
            query.category = category;
        }

        // Sorting
        let sortQuery = {};
        if (sortBy) {
            const [sortField, sortOrder] = sortBy.split(':');
            sortQuery[sortField] = sortOrder === 'desc' ? -1 : 1;
        }

        const events = await EventModel.find(query)
            .sort(sortQuery)
            .skip(skip)
            .limit(limit)
            .populate({ path: 'organizer', model: UserModel, select: '_id username' })
            .populate({ path: 'category', model: CategoryModel, select: '_id name' });

        res.status(200).json({ msg: "All the events", events });
    } catch (err) {
        res.status(500).json({ err});
 }
});

eventRouter.get('/:eventId', async(req, res) => {

    const {eventId} = req.params;
    try {
        const eventDetails = await EventModel.findById(eventId);
        res.status(200).json({ msg: "Details of particular event", eventDetails});

    } catch (err) {
        res.status(500).json({ err });
    }
})





module.exports = {
  eventRouter
};