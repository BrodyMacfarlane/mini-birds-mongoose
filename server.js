var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var SightingCtrl = require('./controllers/SightingCtrl');

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/sighting', SightingCtrl.create);
app.get('/sighting', SightingCtrl.read);
app.put('/sighting/:id', SightingCtrl.update);
app.delete('/sighting/:id', SightingCtrl.delete);

var port = 9999;
var mongoUri = 'mongodb://localhost:27017/mini-birds-mongoose';

mongoose.connect(mongoUri);
mongoose.connection.once('', function(){
	console.log('connected to mongoDB at: ', mongoUri)
});

app.listen(port, function(){
	console.log('listening on port: ', port)
})