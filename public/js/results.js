app.controller('resultsController', ['$scope', 'alchemyAPI', '$http', '$location', 'spotifyAPI', function( $scope, alchemyAPI, $http, $location, spotifyAPI ) {

  // While the analysis function is running, show the loading animation
  $scope.loading = true;

  $("#load-text").fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000);

  // When the data comes back...
  $scope.$on('emotion_data', function(event, data){
      // TODO: move the loading animation into the Spotify function
      $scope.loading = false;

      // Get the emotions object (which includes the user's score for fear, anger, sadness, joy and disgust)
      var emotions = data.emotionData;
      console.log(emotions);

      // Get the highest emotion score
      var arr = Object.keys( emotions ).map(function (key) { return emotions[key]; });
      var strongestEmotion = Math.max.apply( null, arr );
      console.log("strongest emotion is " + strongestEmotion);

      // Get the emotion of the highest score
      var emotion = _.invert(emotions)[strongestEmotion];
      console.log(emotion);

      // Run the appropriate Spotify function
      if (emotion == 'joy') {
        console.log('We going to run the joy function!');
        $scope.runJoy();
      } else if (emotion == 'anger') {
        console.log('we going to run the anger function!');
        $scope.runAnger();
      } else if (emotion == 'disgust') {
        console.log('we going to run the disgust function!');
        $scope.runDisgust();
      } else if (emotion == 'fear') {
        console.log('we going to run the fear function!');
        $scope.runFear();
      } else if (emotion == 'sadness') {
        console.log('we going to run the sad function!');
        $scope.runSadness();
      }

    });

  // Get a playlist and song that matches the highest scoring emotions
  $scope.runJoy = function(){
    console.log('joy function ran');
    $scope.eval = 'happy!';
    spotifyAPI.getJoy().then(function(response){
      $scope.$on('spotify_data', function(event,data){
        console.log('fetching joy data');
        // TODO write a rendering function that will present data for any emotion
        $scope.trackName = data.spotifyData.track.name;
        console.log($scope.trackName);
      })
    })
  }

  $scope.runAnger = function(){
    console.log('anger function ran');
    $scope.eval = 'kind of angry';
    spotifyAPI.getAnger().then(function(response){
      $scope.$on('spotify_data', function(event,data){
        console.log('fetching anger data');
        $scope.trackName = data.spotifyData.track.name;
        console.log($scope.trackName);
      })
    })
  }

  $scope.runFear = function(){
    console.log('fear function ran');
    $scope.eval = 'kind of afraid';
    spotifyAPI.getFear().then(function(response){
      $scope.$on('spotify_data', function(event,data){
        console.log('fetching fear data');
        $scope.trackName = data.spotifyData.track.name;
        console.log($scope.trackName);
      })
    })
  }

  $scope.runSadness = function(){
    console.log('sadness function ran');
    $scope.eval = 'kind of sad';
    spotifyAPI.getSadness().then(function(response){
      $scope.$on('spotify_data', function(event,data){
        console.log('fetching sadness data');
        $scope.trackName = data.spotifyData.track.name;
        console.log($scope.trackName);
      })
    })
  }

  $scope.runDisgust = function(){
    console.log('disgust function ran');
    $scope.eval = 'kind of weird';
    spotifyAPI.getDisgust().then(function(response){
      $scope.$on('spotify_data', function(event,data){
        console.log('fetching disgust data');
        $scope.trackName = data.spotifyData.track.name;
        console.log($scope.trackName);
      })
    })
  }

  $scope.runSpotify = function(){
    console.log('running');
    spotifyAPI.testFunction().then(function(response){
      $scope.$on('spotify_data', function(event, data){
        $scope.trackName = data.spotifyData.track.name;
        $scope.artist = data.spotifyData.track.artists[0].name;
        $scope.previewUrl = data.spotifyData.track.preview_url;
        $scope.albumCover = data.spotifyData.track.album.images[0].url;
        var audio = document.createElement('audio');
        var albumCover = $('<img class="album" src=' + $scope.albumCover + '>');
        audio.setAttribute('id', 'song');
        $('#audio').append(audio);
        // $('#audio').append(albumCover);
        audio.src = ($scope.previewUrl);
      })
    });
  };

// Custom click toggle function to account for "play/pause"
$.fn.clickToggle = function(a, b) {
    return this.each(function() {
        var clicked = false;
        $(this).click(function() {
            if (clicked) {
                clicked = false;
                return b.apply(this, arguments);
            }
            clicked = true;
            return a.apply(this, arguments);
        });
    });
};

// Play or pause the recommended song
$scope.playSong = function(){
  $('#audio').clickToggle(function(){
    var song = document.getElementById('song');
    song.play();
  }, function(){
    song.pause();
  });
}

$scope.playSong();


}]);
