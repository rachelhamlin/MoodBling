var express    = require('express'),
    morgan     = require('morgan'),
    bodyParser = require('body-parser'),
    dotenv     = require('dotenv').config();

var app = express();

app.use(morgan('dev'));

app.use(express.static( __dirname + '/public' ));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

var indexRouter = function(req, res){
  res.sendFile( __dirname + '/public/views/index.html' );
}


var env = process.env.NODE_ENV || 'develop';
// var watson_key = process.env.WATSON_KEY;
var watson_key = '397940cb2b4f38eae9ec9886d64ae850e520c4f7';
console.log('hey this is my watson key' + watson_key);

app.get('/config', function (req, res) {
  if(env === 'develop') {
    res.send(developConfig);
  }else if(env === 'staging') {
    res.send(stagingConfig);
  }else if(env === 'prod') {
    res.send(prodConfig);
  }
});


app.get('/', indexRouter);
app.get('*', indexRouter);

var port = 8080;
app.listen(port, function(){
  console.log('listening on 8080, my favorite port');
})

module.exports = watson_key;
