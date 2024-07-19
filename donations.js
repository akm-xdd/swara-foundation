const express = require('express');
const router = express.Router();
const { createDonation, getDonations, deleteDonation, completeDonation, checkAvailability } = require('../controllers/donations');

router.post('/', createDonation);
router.get('/', getDonations);
router.delete('/:id', deleteDonation);
router.put('/:id/complete', completeDonation);
router.get('/check-availability', checkAvailability);

module.exports = router;
