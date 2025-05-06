const asyncHandler = require('express-async-handler');
const Cuisine = require('../models/cuisineModel');

// @desc    Get all cuisines
// @route   GET /api/cuisines
// @access  Public
const getCuisines = asyncHandler(async (req, res) => {
  const cuisines = await Cuisine.find({});
  res.json(cuisines);
});

// @desc    Get cuisine by ID
// @route   GET /api/cuisines/:id
// @access  Public
const getCuisineById = asyncHandler(async (req, res) => {
  const cuisine = await Cuisine.findById(req.params.id);

  if (cuisine) {
    res.json(cuisine);
  } else {
    res.status(404);
    throw new Error('Cuisine not found');
  }
});

// @desc    Create a cuisine
// @route   POST /api/cuisines
// @access  Private/Admin
const createCuisine = asyncHandler(async (req, res) => {
  const { name, description, imageUrl } = req.body;

  const cuisine = await Cuisine.create({
    name,
    description,
    imageUrl,
  });

  if (cuisine) {
    res.status(201).json(cuisine);
  } else {
    res.status(400);
    throw new Error('Invalid cuisine data');
  }
});

// @desc    Update a cuisine
// @route   PUT /api/cuisines/:id
// @access  Private/Admin
const updateCuisine = asyncHandler(async (req, res) => {
  const cuisine = await Cuisine.findById(req.params.id);

  if (cuisine) {
    cuisine.name = req.body.name || cuisine.name;
    cuisine.description = req.body.description || cuisine.description;
    cuisine.imageUrl = req.body.imageUrl || cuisine.imageUrl;

    const updatedCuisine = await cuisine.save();
    res.json(updatedCuisine);
  } else {
    res.status(404);
    throw new Error('Cuisine not found');
  }
});

// @desc    Delete a cuisine
// @route   DELETE /api/cuisines/:id
// @access  Private/Admin
const deleteCuisine = asyncHandler(async (req, res) => {
  const cuisine = await Cuisine.findById(req.params.id);

  if (cuisine) {
    await cuisine.deleteOne();
    res.json({ message: 'Cuisine removed' });
  } else {
    res.status(404);
    throw new Error('Cuisine not found');
  }
});

module.exports = {
  getCuisines,
  getCuisineById,
  createCuisine,
  updateCuisine,
  deleteCuisine,
};