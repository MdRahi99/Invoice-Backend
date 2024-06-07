const Reservation = require('../models/Reservation');

// Function to calculate total charge
const calculateTotalCharge = (duration, carRate, discount, additionalCharges) => {
    let total = duration * carRate;
    additionalCharges.forEach(charge => {
        total += charge.price;
    });
    total -= discount;
    return Number(total.toFixed(2));
};

// Create a new reservation
exports.createReservation = async (req, res) => {
    try {
        const { additionalCharges, discount, duration, email, firstName, id, lastName, phone, pickupDate, returnDate, totalCharge, vehicle, vehicleType } = req.body;

        const reservation = new Reservation({
            additionalCharges,
            discount: Number(discount),
            duration: Number(duration),
            email,
            firstName,
            id,
            lastName,
            phone,
            pickupDate: new Date(pickupDate),
            returnDate: new Date(returnDate),
            totalCharge: Number(totalCharge),
            vehicle,
            vehicleType
        });

        await reservation.save();
        res.status(201).json(reservation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a reservation by ID
exports.getReservationById = async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        if (!reservation) return res.status(404).json({ error: 'Reservation not found' });
        res.json(reservation);
    } catch (err) {
        res.status500().json({ error: err.message });
    }
};
