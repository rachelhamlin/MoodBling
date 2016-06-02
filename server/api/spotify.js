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
    clientID : '9d048b8d9f3e4dda8290122911457166',
    clientSecret : 'd0e1966e910146569a532b48eb51a27e',
    accessToken: token
  })
}

router.get('/joy', function(req,res){
  console.log('playlist me');
  spotify.searchPlaylists('happy', {limit: 10})
  .then(function(data) {
    var playlists = data.body.playlists.items;
    var playlist = playlists[Math.floor(Math.random() * playlists.length)];
    playlistOwner = playlist.owner.id;
    playlistId = playlist.id;
    // getTracks(playlistOwner, playlistId);
    console.log(playlistOwner);
    console.log(playlistId);
    spotify.getPlaylistTracks(playlistOwner, playlistId, { 'offset' : 1, 'limit' : 5, 'fields' : 'items' })
      .then(function(data) {
        var tracks = data.body.items;
        console.log(tracks);
        var track  = tracks[Math.floor(Math.random() * tracks.length)];
        var trackName = track.track.name;
        console.log('the chosen track!' + track.track.name + ', url: ' + track.track.preview_url);
        res.json(track);
      }, function(err) {
        console.log('Something went wrong!', err);
      });
  }, function(err) {
    console.error(err);
  });
})

router.get('/anger', function(req,res){
  console.log('angry playlist me');
  spotify.searchPlaylists('angry', {limit: 10})
  .then(function(data) {
    var playlists = data.body.playlists.items;
    var playlist = playlists[Math.floor(Math.random() * playlists.length)];
    playlistOwner = playlist.owner.id;
    playlistId = playlist.id;
    // getTracks(playlistOwner, playlistId);
    console.log(playlistOwner);
    console.log(playlistId);
    spotify.getPlaylistTracks(playlistOwner, playlistId, { 'offset' : 1, 'limit' : 5, 'fields' : 'items' })
      .then(function(data) {
        var tracks = data.body.items;
        console.log(tracks);
        var track  = tracks[Math.floor(Math.random() * tracks.length)];
        var trackName = track.track.name;
        console.log('the chosen track!' + track.track.name + ', url: ' + track.track.preview_url);
        res.json(track);
      }, function(err) {
        console.log('Something went wrong!', err);
      });
  }, function(err) {
    console.error(err);
  });
})

router.get('/sadness', function(req,res){
  console.log('sad playlist me');
  spotify.searchPlaylists('blues', {limit: 10})
  .then(function(data) {
    var playlists = data.body.playlists.items;
    var playlist = playlists[Math.floor(Math.random() * playlists.length)];
    playlistOwner = playlist.owner.id;
    playlistId = playlist.id;
    // getTracks(playlistOwner, playlistId);
    console.log(playlistOwner);
    console.log(playlistId);
    spotify.getPlaylistTracks(playlistOwner, playlistId, { 'offset' : 1, 'limit' : 5, 'fields' : 'items' })
      .then(function(data) {
        var tracks = data.body.items;
        console.log(tracks);
        var track  = tracks[Math.floor(Math.random() * tracks.length)];
        var trackName = track.track.name;
        console.log('the chosen track!' + track.track.name + ', url: ' + track.track.preview_url);
        res.json(track);
      }, function(err) {
        console.log('Something went wrong!', err);
      });
  }, function(err) {
    console.error(err);
  });
})

router.get('/fear', function(req,res){
  console.log('fear playlist me');
  spotify.searchPlaylists('chill', {limit: 10})
  .then(function(data) {
    var playlists = data.body.playlists.items;
    var playlist = playlists[Math.floor(Math.random() * playlists.length)];
    playlistOwner = playlist.owner.id;
    playlistId = playlist.id;
    // getTracks(playlistOwner, playlistId);
    console.log(playlistOwner);
    console.log(playlistId);
    spotify.getPlaylistTracks(playlistOwner, playlistId, { 'offset' : 1, 'limit' : 5, 'fields' : 'items' })
      .then(function(data) {
        var tracks = data.body.items;
        console.log(tracks);
        var track  = tracks[Math.floor(Math.random() * tracks.length)];
        var trackName = track.track.name;
        console.log('the chosen track!' + track.track.name + ', url: ' + track.track.preview_url);
        res.json(track);
      }, function(err) {
        console.log('Something went wrong!', err);
      });
  }, function(err) {
    console.error(err);
  });
})

router.get('/disgust', function(req,res){
  console.log('disgust playlist me');
  spotify.searchPlaylists('happy', {limit: 10})
  .then(function(data) {
    var playlists = data.body.playlists.items;
    var playlist = playlists[Math.floor(Math.random() * playlists.length)];
    playlistOwner = playlist.owner.id;
    playlistId = playlist.id;
    getTracks(playlistOwner, playlistId);
    console.log(playlistOwner);
    console.log(playlistId);
    // spotify.getPlaylistTracks(playlistOwner, playlistId, { 'offset' : 1, 'limit' : 5, 'fields' : 'items' })
    //   .then(function(data) {
    //     var tracks = data.body.items;
    //     console.log(tracks);
    //     var track  = tracks[Math.floor(Math.random() * tracks.length)];
    //     var trackName = track.track.name;
    //     console.log('the chosen track!' + track.track.name + ', url: ' + track.track.preview_url);
    //     res.json(track);
    //   }, function(err) {
    //     console.log('Something went wrong!', err);
    //   });
  }, function(err) {
    console.error(err);
  });
})

var getTracks = function(playlistOwner, playlistId){
  console.log('GET TRACKS');
  spotify.getPlaylistTracks(playlistOwner, playlistId, { 'offset' : 1, 'limit' : 5, 'fields' : 'items' })
    .then(function(data) {
      console.log('GET *SPOTIFY* TRACKS');
      var tracks = data.body.items;
      console.log(tracks);
      var track  = tracks[Math.floor(Math.random() * tracks.length)];
      var trackName = track.track.name;
      console.log('the chosen track!' + track.track.name + ', url: ' + track.track.preview_url);
      res.json(track);
    }, function(err) {
      console.log('Something went wrong!', err);
    })
}


module.exports = router;
