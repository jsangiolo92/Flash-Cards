const express = require('express');
const parser = require('body-parser');
const db = require('../database/db.js');

const app = express();
const port = 4000;

app.use(parser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/*', (req, res) => {
  res.send('Hello, world!');
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})