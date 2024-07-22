// const express = require('express');
// const router = express.Router();
// const { createDonation, getDonations, deleteDonation, completeDonation, checkAvailability, restoreDonation, updateDonation } = require('../controllers/donations');

// router.post('/', createDonation);
// router.get('/', getDonations);
// router.put('/:id/delete', deleteDonation); // Updated delete route to use put
// router.put('/:id/complete', completeDonation);
// router.get('/check-availability', checkAvailability);
// router.put('/:id/restore', restoreDonation);
// router.put('/:id', updateDonation);

// module.exports = router;

// routes/donations.js
const express = require('express');
const router = express.Router();

module.exports = function(io) {
  const donationController = require('../controllers/donations')(io);

  router.post('/', donationController.createDonation);
  router.get('/', donationController.getDonations);
  router.put('/:id/delete', donationController.deleteDonation); 
  router.put('/:id/complete', donationController.completeDonation);
  router.get('/check-availability', donationController.checkAvailability);
  router.put('/:id/restore', donationController.restoreDonation);
  router.put('/:id', donationController.updateDonation);

  return router;
};
