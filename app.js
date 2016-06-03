var express       = require('express'),
    morgan        = require('morgan'),
    bodyParser    = require('body-parser'),
    spotifyWebAPI = require('spotify-web-api-node'),
    request       = require('request'),
    underscore    = require('underscore'),
    dotenv        = require('dotenv').config();

var app = express();

app.use(morgan('dev'));

app.use(express.static( __dirname + '/public' ));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

var indexRouter = function(req, res){
  res.sendFile( __dirname + '/public/views/index.html' );
}

var alchemyRouter = require('./server/api/alchemy');
var spotifyRouter = require('./server/api/spotify');

app.get('/', indexRouter);
app.use('/api/alchemy', alchemyRouter);
app.use('/api/spotify', spotifyRouter);


var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log('listening on 8080, my favorite port');
})
