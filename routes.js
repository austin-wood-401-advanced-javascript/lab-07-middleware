'use strict';

const express = require('express');
const app = express();
const DError = require('./middleware/DError.js');


let router = express.Router();


router.get('/c', (req,res) => {
  res.status(200).send('Route C');
});

router.get('/d', DError, (req,res) => {
  res.status(200).send('Route D');
});
module.exports = router;
