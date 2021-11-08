const chalk = require('chalk');
const { channel } = require('diagnostics_channel');
const express = require('express');
const app = express();
const debug = require('debug')('server');
const morgan = require('morgan');
const port = process.env.PORT || 4545;
const path = require('path');
const homeRoute = require('./routes/homeRoute');
const productRoute = require('./routes/productRoute');


app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'statics')));
app.set('views');
app.set('view engine','ejs');
app.use(homeRoute);
app.use('/products', productRoute);

app.listen(port,()=>{
    debug(chalk.magentaBright(`Server running on port: ${chalk.bold(port)}`))
})