const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    partySize: {
      type: String,
      required: true,
    },
    cuisineId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cuisine',
      required: true,
    },
    specialRequests: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ['confirmed', 'cancelled', 'completed'],
      default: 'confirmed',
    },
  },
  {
    timestamps: true,
  }
);

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;