'use strict'; 

module.exports = (err,req,res,next) => {
  console.log('ping1');
  res.status(500).send(err);
};
