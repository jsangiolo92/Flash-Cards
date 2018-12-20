const express = require('express');
const parser = require('body-parser');
const db = require('../database/db.js');

const app = express();
const port = 4000;

app.use(parser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/cards', (req, res) => {
  console.log('req.body is: ', req.body);
  db.addCard(req.body)
  .then( () => res.sendStatus(201))
  .catch( (err) => console.log('error in db.addCard: ', err));
})

app.get('/*', (req, res) => {
  res.send('Hello, world!');
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})