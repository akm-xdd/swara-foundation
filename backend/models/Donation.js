const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  description: String,
  weight: String,
  address: String,
  status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Donation', donationSchema);
