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

const addCard = (info) => {
  return Card.create({
    title: info.title,
    subject: info.subject,
    answer: info.answer,
    author: info.author,
    links: info.links
  })
}

const addCategory = (info) => {
  return Category.findOneAndUpdate(
    {name: info.subject}, {name: info.subject}, {upsert: true}
  )
}

const getCategories = () => {
  return Category.find().exec();
}

module.exports = {
  addCard: addCard,
  addCategory: addCategory,
  getCategories: getCategories
}
