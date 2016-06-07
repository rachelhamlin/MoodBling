var express       = require('express'),
    path          = require('path'),
    router        = express.Router(),
    request       = require('request'),
    spotifyWebAPI = require('spotify-web-api-node'),
    spotifyHelper = require('../lib/spotifyhelper');

var spotify;
var playlistOwner;
var playlistId;

spotifyHelper(initSpotifyWebApi)

function initSpotifyWebApi( token ) {
  spotify = new spotifyWebAPI({
    clientID : process.env.SPOTIFY_ID,
    clientSecret : process.env.SPOTIFY_SECRET,
    accessToken: token
  })
}

router.get('/emotion/:feeling', getPlaylists)

function getPlaylists (req,res){
  spotify.searchPlaylists(req.params.feeling, {limit: 10})
  .then(function(data) {
    var playlists = data.body.playlists.items;
    var playlist = playlists[Math.floor(Math.random() * playlists.length)];
    playlistOwner = playlist.owner.id;
    playlistId = playlist.id;
    getTracks(playlistOwner, playlistId, res);
  }, function(err) {
    console.error(err);
    spotifyHelper(initSpotifyWebApi);
    getPlaylists(req,res);
  });
}


var getTracks = function(playlistOwner, playlistId, res){
  spotify.getPlaylistTracks(playlistOwner, playlistId, { 'offset' : 1, 'limit' : 5, 'fields' : 'items' })
    .then(function(data) {
      var tracks = data.body.items;
      console.log(tracks);
      var track  = tracks[Math.floor(Math.random() * tracks.length)];
      var trackName = track.track.name;
      console.log('the chosen track!' + track.track.name + ', url: ' + track.track.preview_url);
      if (!track.track.preview_url) {
        getTracks(playlistOwner, playlistId, res);
      }; 
      res.json(track);
    }, function(err) {
      console.log('Something went wrong!', err);
    })
}


module.exports = router;
