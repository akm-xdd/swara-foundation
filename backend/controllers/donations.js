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
    const donations = await Donation.find().sort({ date: 1, timeSlot: 1 });
    res.status(200).json(donations);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete donation (move to trash)
exports.deleteDonation = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    donation.deleted = true;
    await donation.save();
    res.status(200).json({ message: 'Donation moved to trash' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Complete donation
exports.completeDonation = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    donation.status = 'Completed';
    donation.completedAt = new Date();
    await donation.save();
    res.status(200).json(donation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Restore donation from trash
exports.restoreDonation = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    donation.deleted = false;
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

// Update donation
exports.updateDonation = async (req, res) => {
  try {
    const updatedDonation = await Donation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedDonation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
