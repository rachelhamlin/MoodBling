var express = require('express');
var app = express();

app.use(express.static( __dirname + '/public' ));

var indexRouter = function(req, res){
  res.sendFile( __dirname + '/public/views/index.html' );
}

app.get('/', indexRouter);
app.get('*', indexRouter);

var port = 8080;
app.listen(port, function(){
  console.log('listening on 8080, my favorite port');
})
