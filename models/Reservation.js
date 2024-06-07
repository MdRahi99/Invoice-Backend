const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    additionalCharges: [{ type: String }],
    discount: { type: Number },
    duration: { type: Number },
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    id: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    pickupDate: { type: Date, required: true },
    returnDate: { type: Date, required: true },
    totalCharge: { type: Number, required: true },
    vehicle: { type: String, required: true },
    vehicleType: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Reservation', reservationSchema);
