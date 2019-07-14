'use strict';

const express = require('express');
const fiveErr = require('./middleware/500.js');
const missingPage = require('./middleware/400.js');
const theTime = require('./middleware/requestTime.js');
const theLog = require('./middleware/theLog.js');
const squared = require('./middleware/squared.js');
const router = require('./routes.js');


const app = express();
const PORT = process.env.PORT || 8080;

//middleware

app.use(theTime);
app.use(theLog);
app.use(router);

app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

app.get('/b', squared(4), (req,res) => {
  res.status(200).send(`${req.number}`);
});


app.use('*', missingPage);
app.use(fiveErr);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

