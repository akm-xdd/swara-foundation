const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  description: String,
  weight: String,
  address: String,
  pincode: String, // Added pincode field
  date: String,
  timeSlot: String,
  status: { type: String, default: 'Uncomplete' },
  isActive: { type: Boolean, default: true },
  attendedBy: { type: String, default: "" },
  pickupRemarks: { type: String, default: "" },
  deleted: { type: Boolean, default: false },
  completedAt: { type: Date }
});

module.exports = mongoose.model('Donation', donationSchema);
