var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');

var axios = require('axios');
var cheerio = require('cheerio');

// var db = require('./models');

var PORT = process.env.PORT || 3000;

var app = express();

app.use(logger('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controller/routes.js');
app.use(routes);

mongoose.connect('mongodb://localhost/technews', { useNewUrlParser: true });

app.listen(PORT, () => console.log(`App running on port ${PORT}`));