// // category.routes.js

// const express = require('express');
// const { CategoryModel } = require('../model/category.model');
// const categoryRouter = express.Router();

// // Route for creating a new category
// categoryRouter.post('/', async (req, res) => {
//   try {
//     const { name } = req.body;

//     // Check if the category with the given name already exists
//     const existingCategory = await CategoryModel.findOne({ name });
//     if (existingCategory) {
//       return res.status(400).json({ message: 'Category already exists' });
//     }

//     // Create a new category
//     const newCategory = await CategoryModel.create({ name });

//     res.status(201).json(newCategory);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// // Route for getting all categories
// categoryRouter.get('/', async (req, res) => {
//   try {
//     const categories = await CategoryModel.find();
//     res.json(categories);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// module.exports = {
//     categoryRouter
// }

const express = require('express');
const { CategoryModel } = require('../model/category.model');
const categoryRouter = express.Router();

// Route for creating a new category
categoryRouter.post('/', async (req, res) => {
  try {
    const { name } = req.body;

    // Check if the category with the given name already exists
    const existingCategory = await CategoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ message: 'Category already exists' });
    }

    // Create a new category
    const newCategory = await CategoryModel.create({ name });

    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Route for getting all categories
categoryRouter.get('/', async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Route for getting a category by its ID
categoryRouter.get('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;

    // Find the category by ID
    const category = await CategoryModel.findById(categoryId);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = {
  categoryRouter
};
