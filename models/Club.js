// models/Book.js

const mongoose = require('mongoose');

const ClubSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  address: String,
  open: Boolean,
  founded: Date
  },
  {
    timestamps: true
});

module.exports = Club = mongoose.model('club', ClubSchema);