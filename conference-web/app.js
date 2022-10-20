const express = require('express');//Importing express
const expressLayouts = require('express-ejs-layouts');//Importing express-ejs-layouts

//initialize a new express apllicaion
const app= express();
const port = process.env.POST || 3000;
require('dotenv').config();

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(expressLayout);

app.set('layout', './layouts/main');

const routes = require('/server/routes/confRoutes.js')
app.use('/', routes);

app.listen(port, ()=>console.log(`Listening to port ${port}`));//console-log with the single back-ticks



