var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');

var config = require('./config');
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');


var corsOptions = {
    origin: 'http://localhost:8080'
};

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: true,
    resave: true
}));


app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriends);







var port = 3000;
app.listen(3000, function() {
    console.log('');
    console.log('>>>O.o<<< Listening for ghosts in the machine on port', port, ' >>>o.O<<<');
});
