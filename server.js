'use strict';

const express = require('express');
const errWare = require('./middleware/500.js');
const whereItAt = require('./middleware/400.js');
const theTime = require('./middleware/requestTime.js');
const theLog = require('./middleware/theLog.js');
const DError = require('./middleware/DError.js')

const app = express();
const PORT = process.env.PORT || 8080;

//middleware

app.use(theTime);
app.use(theLog);
app.use(errWare);
app.use('/d', DError);
app.use('*', whereItAt);

app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

app.get('/b', (req,res) => {
  res.status(200).send(req.number);
});

app.get('/c', (req,res) => {
  res.status(200).send('Route C');
});

app.get('/d', (req,res) => {
  res.status(200).send('Route D');
});


app.listen(PORT, () => console.log(`Listening on ${PORT}`));

