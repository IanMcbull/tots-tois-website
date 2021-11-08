const express = require('express');
const homeRoute = express.Router();
const debug = require('debug')('server:homeRoute');


homeRoute.route('/').get((req,res)=>{
  res.render('index',{title:'Home'})
});

module.exports = homeRoute