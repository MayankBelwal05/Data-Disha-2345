const { EventModel } = require('../model/event.model');
const { UserModel } = require('../model/user.model');
const { CategoryModel } = require('../model/category.model');

// Function to get category by name
const getCategoryByName = async (name) => {
  return CategoryModel.findOne({ name: { $regex: name, $options: 'i' } });
}
// Function to populate event with organizer and category details
// const populateEvent = (query) => {
//   return query
//     .populate({ path: 'organizer', model: UserModel, select: '_id firstName lastName' })
//     .populate({ path: 'category', model: CategoryModel, select: '_id name' });
// }

// Function to create a new event
exports.createEvent = async ({ event }) => {
  try {
    // const organizer = await UserModel.findById(userId);
    // if (!organizer) throw new Error('Organizer not found');

    const newEvent = await EventModel.create({ event });
    return newEvent;
  } catch (error) {
    throw error;
  }
};

// Function to get an event by ID
exports.getEventById = async (eventId) => {
  try {
    const event = await populateEvent(EventModel.findById(eventId));
    if (!event) throw new Error('Event not found');
    return event;
  } catch (error) {
    throw error;
  }
};

// Function to update an event
exports.updateEvent = async ({ userId, event }) => {
  try {
    const eventToUpdate = await EventModel.findById(event._id);
    if (!eventToUpdate || eventToUpdate.organizer.toHexString() !== userId) {
      throw new Error('Unauthorized or event not found');
    }

    const updatedEvent = await EventModel.findByIdAndUpdate(
      event._id,
      { ...event, category: event.categoryId },
      { new: true }
    );

    return updatedEvent;
  } catch (error) {
    throw error;
  }
};

// Function to delete an event
exports.deleteEvent = async ({ eventId }) => {
  try {
    const deletedEvent = await EventModel.findByIdAndDelete(eventId);
    return deletedEvent;
  } catch (error) {
    throw error;
  }
};

// Function to get all events
exports.getAllEvents = async ({ query, category, limit = 6, page }) => {
  try {
    const titleCondition = query ? { title: { $regex: query, $options: 'i' } } : {};
    const categoryCondition = category ? await getCategoryByName(category) : null;
    const conditions = {
      $and: [titleCondition, categoryCondition ? { category: categoryCondition._id } : {}],
    };

    const skipAmount = (Number(page) - 1) * limit;
    const eventsQuery = EventModel.find(conditions)
      .sort({ createdAt: 'desc' })
      .skip(skipAmount)
      .limit(limit);

    const events = await populateEvent(eventsQuery);
    const eventsCount = await EventModel.countDocuments(conditions);

    return {
      data: events,
      totalPages: Math.ceil(eventsCount / limit),
    };
  } catch (error) {
    throw error;
  }
};

// Function to get events by organizer
exports.getEventsByUser = async ({ userId, limit = 6, page }) => {
  try {
    const conditions = { organizer: userId };
    const skipAmount = (page - 1) * limit;

    const eventsQuery = EventModel.find(conditions)
      .sort({ createdAt: 'desc' })
      .skip(skipAmount)
      .limit(limit);

    const events = await populateEvent(eventsQuery);
    const eventsCount = await EventModel.countDocuments(conditions);

    return {
      data: events,
      totalPages: Math.ceil(eventsCount / limit),
    };
  } catch (error) {
    throw error;
  }
};

// Function to get related events by category
exports.getRelatedEventsByCategory = async ({ categoryId, eventId, limit = 3, page = 1 }) => {
  try {
    const skipAmount = (Number(page) - 1) * limit;
    const conditions = { $and: [{ category: categoryId }, { _id: { $ne: eventId } }] };

    const eventsQuery = EventModel.find(conditions)
      .sort({ createdAt: 'desc' })
      .skip(skipAmount)
      .limit(limit);

    const events = await populateEvent(eventsQuery);
    const eventsCount = await EventModel.countDocuments(conditions);

    return {
      data: events,
      totalPages: Math.ceil(eventsCount / limit),
    };
  } catch (error) {
    throw error;
  }
};
