const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const donationRoutes = require('./routes/donations');
app.use('/api/donations', donationRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://annie29:anurag@cluster0.oo3kmna.mongodb.net/donation", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected successfully');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error('Connection error', err.message);
});
