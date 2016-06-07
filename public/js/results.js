app.controller('resultsController', ['$scope', 'alchemyAPI', '$http', '$location', 'spotifyAPI', function( $scope, alchemyAPI, $http, $location, spotifyAPI ) {

  // While the analysis function is running, show the loading animation
  $scope.loading = true;

  $("#load-text").fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000);

  // When the data comes back...
  $scope.$on('emotion_data', function(event, data){

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
    var color = 'joy';
    $scope.descriptor = 'a happy song';
    spotifyAPI.getJoy().then(function(response){
      $scope.getData(color);
      $scope.loading = false;
    })
  }

  $scope.runAnger = function(){
    console.log('anger function ran');
    $scope.eval = 'kind of angry';
    var color = 'anger';
    $scope.descriptor = 'an angry song';
    spotifyAPI.getAnger().then(function(response){
      $scope.getData(color);
      $scope.loading = false;
    })
  }

  $scope.runFear = function(){
    console.log('fear function ran');
    $scope.eval = 'a little anxious';
    var color = 'fear';
    $scope.descriptor = 'a chill song';
    spotifyAPI.getFear().then(function(response){
      $scope.getData(color);
      $scope.loading = false;
    })
  }

  $scope.runSadness = function(){
    console.log('sadness function ran');
    $scope.eval = 'sad';
    var color = 'sadness';
    $scope.descriptor = 'some blues';
    spotifyAPI.getSadness().then(function(response){
      $scope.getData(color);
      $scope.loading = false;
    })
  }

  $scope.runDisgust = function(){
    console.log('disgust function ran');
    $scope.eval = 'vaguely disgusted';
    var color = 'disgust';
    $scope.descriptor = 'a happy song';
    spotifyAPI.getDisgust().then(function(response){
      $scope.getData(color);
      $scope.loading = false;
    })
  }

  $scope.getData = function(color){
    $scope.$on('spotify_data', function(event,data){
      $('body').addClass(color).removeClass('primary');
      console.log("track ID " + data.spotifyData.track.id);
      $scope.trackName = data.spotifyData.track.name;
      $scope.artist = data.spotifyData.track.artists[0].name;
      $scope.previewUrl = data.spotifyData.track.preview_url;
      $scope.albumCover = data.spotifyData.track.album.images[0].url;
      $scope.trackID = data.spotifyData.track.id;
      var audio = document.createElement('audio');
      audio.setAttribute('id', 'song');
      $('#audio').append(audio);
      audio.src = ($scope.previewUrl);
      $scope.playSong();
      $scope.revertBackground(color);
    })
  }

// Change background back on re-start
  $scope.revertBackground = function(color){
    $('#restart, #title').click(function(){
      console.log('clicked');
      $('body').addClass('primary').removeClass(color);
    });
  }

  $scope.revertBackground();


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

// Play or pause the recommended song & show buttons
$scope.playSong = function(){
  $('.album').clickToggle(function(){
    var song = document.getElementById('song');
    song.play();
    $(this).addClass('playing');
  }, function(){
    song.pause();
    $(this).removeClass('playing');
  });
}

$scope.playSong();

// Toggle overlay
$scope.toggleOverlay = function(){
  $('.album').mouseenter(function(){
    $(this).addClass('hover');
    $('.active').show();
    if ($(this).hasClass('playing')){
      $('.play').hide();
      $('.pause').show();
    }
  })
  .mouseleave(function(){
    $(this).removeClass('hover');
    $('.active').hide();
    if (!$(this).hasClass('playing')) {
      $('.pause').hide();
      $('.play').addClass('active');
    }
  })
}

$scope.toggleOverlay();

}]);
