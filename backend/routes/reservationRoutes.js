const express = require('express');
const router = express.Router();
const {
  createReservation,
  getReservations,
  getReservationById,
  updateReservation,
  deleteReservation,
  getReservationStats,
} = require('../controllers/reservationController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .post(createReservation)
  .get(protect, admin, getReservations);

router.route('/stats').get(protect, admin, getReservationStats);

router.route('/:id')
  .get(protect, getReservationById)
  .put(protect, updateReservation)
  .delete(protect, admin, deleteReservation);

module.exports = router;