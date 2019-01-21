const express = require('express');
const parser = require('body-parser');
const db = require('../database/db.js');

const app = express();
const port = 4000;

app.use(parser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/categories', (req, res) => {
  db.getCategories()
  .then( (results) => {
    let categories = results.map(val => val.name);
    res.send(categories);
  })
  .catch( (err) => console.log('error in db.getCategories: ', err));
})

app.get('/cards', (req, res) => {
  db.getCards(req.query.subject)
  .then( (results) => res.send(results))
  .catch( (err) => console.log('error in db.getCards: ', err));
})

app.post('/cards', (req, res) => {
  db.addCard(req.body)
  .then( () => {
    db.addCategory(req.body)
    .then ( () => res.sendStatus(201))
    .catch( (err) => console.log('error in db.addCategory', err));
  })
  .catch( (err) => console.log('error in db.addCard: ', err));
})

app.put('/cards', (req, res) => {
  res.send('request to app.put received');
})

app.get('/*', (req, res) => {
  res.send('Hello, world!');
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})