const mongoose = require('mongoose');
//create schema in mongodb
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publishedDate: Date,
  pages: Number
});

module.exports = mongoose.model('Book', bookSchema);