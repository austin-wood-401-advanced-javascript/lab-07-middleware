'use strict'

module.exports = (err,req,res,next) => {
  console.log('ping2');
  res.send(400).send(err);
};
