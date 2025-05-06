const express = require('express');
const router = express.Router();
const {
  getCuisines,
  getCuisineById,
  createCuisine,
  updateCuisine,
  deleteCuisine,
} = require('../controllers/cuisineController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .get(getCuisines)
  .post(protect, admin, createCuisine);

router.route('/:id')
  .get(getCuisineById)
  .put(protect, admin, updateCuisine)
  .delete(protect, admin, deleteCuisine);

module.exports = router;