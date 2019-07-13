'use strict'

module.exports = (err,req,res,next) => {
  console.log('400err');
  res.status(400).send('Huh???');
};
