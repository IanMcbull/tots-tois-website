const express = require('express');
const productRoute = express.Router();

productRoute.route('/').get((req,res)=>{
    res.render('products',{title:'Products'})
})

module.exports = productRoute;