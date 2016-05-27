var express = require('express');
var app = express();

app.use(express.static( __dirname + '/public' ));

app.get('/', function( req, res, next ) {
  res.sendFile( __dirname + '/public/views/index.html' );
});

var port = 8080;
app.listen(port, function(){
  console.log('listening on 8080, my favorite port');
})
