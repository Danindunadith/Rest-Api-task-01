const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// CREATE
router.post('/books', async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.send(book);
});

// READ all
router.get('/books', async (req, res) => {
  const books = await Book.find();
  res.send(books);
});

// READ one
router.get('/books/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.send(book);
});

// UPDATE
router.put('/books/:id', async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(book);
});

// DELETE
router.delete('/books/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.send({ message: 'Book deleted' });
});

module.exports = router;
