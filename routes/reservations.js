const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

// POST reservation
router.post('/', reservationController.createReservation);

// GET reservation by ID
router.get('/:id', reservationController.getReservationById);

module.exports = router;
