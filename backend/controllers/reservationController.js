const asyncHandler = require('express-async-handler');
const Reservation = require('../models/reservationModel');

// @desc    Create a new reservation
// @route   POST /api/reservations
// @access  Public
const createReservation = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    phone,
    date,
    time,
    partySize,
    cuisineId,
    specialRequests,
  } = req.body;

  const reservation = await Reservation.create({
    name,
    email,
    phone,
    date,
    time,
    partySize,
    cuisineId,
    specialRequests,
  });

  if (reservation) {
    res.status(201).json(reservation);
  } else {
    res.status(400);
    throw new Error('Invalid reservation data');
  }
});

// @desc    Get all reservations
// @route   GET /api/reservations
// @access  Private/Admin
const getReservations = asyncHandler(async (req, res) => {
  const reservations = await Reservation.find({}).sort({ date: -1, time: -1 });
  res.json(reservations);
});

// @desc    Get reservation by ID
// @route   GET /api/reservations/:id
// @access  Private/Admin or Owner
const getReservationById = asyncHandler(async (req, res) => {
  const reservation = await Reservation.findById(req.params.id);

  if (reservation) {
    res.json(reservation);
  } else {
    res.status(404);
    throw new Error('Reservation not found');
  }
});

// @desc    Update reservation
// @route   PUT /api/reservations/:id
// @access  Private/Admin or Owner
const updateReservation = asyncHandler(async (req, res) => {
  const reservation = await Reservation.findById(req.params.id);

  if (reservation) {
    reservation.name = req.body.name || reservation.name;
    reservation.email = req.body.email || reservation.email;
    reservation.phone = req.body.phone || reservation.phone;
    reservation.date = req.body.date || reservation.date;
    reservation.time = req.body.time || reservation.time;
    reservation.partySize = req.body.partySize || reservation.partySize;
    reservation.cuisineId = req.body.cuisineId || reservation.cuisineId;
    reservation.specialRequests = req.body.specialRequests || reservation.specialRequests;
    reservation.status = req.body.status || reservation.status;

    const updatedReservation = await reservation.save();
    res.json(updatedReservation);
  } else {
    res.status(404);
    throw new Error('Reservation not found');
  }
});

// @desc    Delete reservation
// @route   DELETE /api/reservations/:id
// @access  Private/Admin or Owner
const deleteReservation = asyncHandler(async (req, res) => {
  const reservation = await Reservation.findById(req.params.id);

  if (reservation) {
    await reservation.deleteOne();
    res.json({ message: 'Reservation removed' });
  } else {
    res.status(404);
    throw new Error('Reservation not found');
  }
});

// @desc    Get reservation statistics
// @route   GET /api/reservations/stats
// @access  Private/Admin
const getReservationStats = asyncHandler(async (req, res) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const totalReservations = await Reservation.countDocuments({});
  
  const todayReservations = await Reservation.countDocuments({
    date: today.toISOString().split('T')[0],
  });
  
  const upcomingReservations = await Reservation.countDocuments({
    date: { $gt: today.toISOString().split('T')[0] },
  });
  
  // Calculate average party size
  const reservations = await Reservation.find({}, 'partySize');
  const totalPartySize = reservations.reduce(
    (acc, reservation) => acc + parseInt(reservation.partySize), 
    0
  );
  const averagePartySize = totalPartySize / (reservations.length || 1);
  
  res.json({
    totalReservations,
    todayReservations,
    upcomingReservations,
    averagePartySize,
  });
});

module.exports = {
  createReservation,
  getReservations,
  getReservationById,
  updateReservation,
  deleteReservation,
  getReservationStats,
};