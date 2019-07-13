'use strict';

const express = require('express');
const errWare = require('./middleware/500.js');
const errorWare = require('./middleware/400.js');

const app = express();

app.use(errWare);
app.use(errWare);

const PORT = process.env.PORT || 8080;

app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

app.get('/b', (req,res) => {
  res.status(200).send('Route B');
});

app.get('/c', (req,res) => {
  res.status(200).send('Route C');
});

app.get('/d', (req,res) => {
  res.status(200).send('Route D');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

