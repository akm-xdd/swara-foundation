const Donation = require('../models/Donation');

// Create donation
exports.createDonation = async (req, res) => {
  try {
    const newDonation = new Donation(req.body);
    await newDonation.save();
    res.status(201).json(newDonation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get donations
exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.status(200).json(donations);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete donation
exports.deleteDonation = async (req, res) => {
  try {
    await Donation.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Donation deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Complete donation
exports.completeDonation = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    donation.status = 'Completed';
    await donation.save();
    res.status(200).json(donation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Check availability
exports.checkAvailability = async (req, res) => {
  try {
    const { date, timeSlot } = req.query;
    const donation = await Donation.findOne({ date, timeSlot });
    if (donation) {
      res.status(200).json({ available: false });
    } else {
      res.status(200).json({ available: true });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

