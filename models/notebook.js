const mongoose = require('mongoose');

const notebookSchema = new mongoose.Schema({
  brand: String,
  model: String,
  price: Number,
});

const Notebook = mongoose.model('Notebook', notebookSchema);

module.exports = Notebook;
