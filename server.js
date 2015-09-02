'use strict';

var express    = require('express'),
    routes     = require('./app/routes/index.js'),
    mongoose   = require('mongoose'),
    passport   = require('passport'),
    session    = require('express-session'),
    bodyParser = require('body-parser');

var app = express();
require('./app/config/passport')(passport);

mongoose.connect('mongodb://localhost:27017/clementinejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));
app.use('/factories', express.static(process.cwd() + '/app/factories'));

app.use(session({
	secret: 'secretClementine',
	resave: false,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

routes(app, passport);

var port = 3000;
app.listen(port, function () {
	console.log('Node.js listening on port ' + port + '...');
});
