const express = require('express');
const router = express.Router();
const { createDonation, getDonations, deleteDonation, completeDonation } = require('../controllers/donations');

router.post('/', createDonation);
router.get('/', getDonations);
router.delete('/:id', deleteDonation);
router.put('/:id/complete', completeDonation);

module.exports = router;
