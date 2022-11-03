// models/Book.js

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
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

module.exports = Book = mongoose.model('book', BookSchema);