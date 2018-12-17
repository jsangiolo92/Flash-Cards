const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/flashcards');

let cardSchema = mongoose.Schema({
  title: {type: String, unique: true},
  subject: String,
  answer: String,
  author: String,
  links: Array
});

let categorySchema = mongoose.Schema({
  name: {type: String, unique: true}
})

let Card = mongoose.model('Card', cardSchema);
let Category = mongoose.model('Category', categorySchema);

module.exports = {}
