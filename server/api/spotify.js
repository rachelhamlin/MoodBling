var express       = require('express'),
    path          = require('path'),
    router        = express.Router(),
    spotifyWebAPI = require('spotify-web-api-node');

var spotifyThing = new spotifyWebAPI({
  clientID : '9d048b8d9f3e4dda8290122911457166',
  clientSecret : 'd0e1966e910146569a532b48eb51a27e',
  redirectUri : 'http://localhost:8080/results'
})

router.get('/results', function(req,res){
  console.log('route hit');
  spotifyThing.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', {limit: 10, offset: 20})
  .then(function(data) {
    console.log(data.body);
    res.json(data.body);
  }, function(err) {
    console.error(err);
  });
})

router.get('/playlists', function(req,res){
  console.log('playlist me');
  spotifyThing.searchPlaylists('happy', {limit: 10})
  .then(function(data) {
    console.log(data.body);
    res.json(data.body);
  }, function(err) {
    console.error(err);
  });
})

module.exports = router;
