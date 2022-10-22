const express = require('express');//Importing express
const expressLayouts = require('express-ejs-layouts');//Importing express-ejs-layouts

//initialize a new express apllicaion
const app= express();
const port = process.env.POST || 3000;
require('dotenv').config();

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');// specify the view engim=ne which is ejs

// using app.use to serve up static CSS files in public/css/ folder when /public link is called in ejs files
// app.use("/route", express.static("foldername"));
app.use('/public', express.static('public'));

const routes = require('./server/routes/conferenceRoutes')
app.use('/', routes);

app.listen(port, ()=>console.log(`Listening to port ${port}`));//console-log with the single back-ticks



