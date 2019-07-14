'use strict'

module.exports = (req,res) => {
  console.log('400err');
  res.status(404).send('Cant find the page');
};
