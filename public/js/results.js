app.controller('resultsController', ['$scope', 'alchemyAPI', '$http', '$location', 'spotifyAPI', function( $scope, alchemyAPI, $http, $location, spotifyAPI ) {

  $scope.loading = true;

  $scope.$on('emotion_data', function(event, data){
      $scope.loading = false;
      $scope.emotions = data.emotionData;
      console.log($scope.emotions);
      $scope.runSpotify();
    });

  $scope.runSpotify = function(){
    console.log('running');
    spotifyAPI.testFunction().then(function(response){
      $scope.$on('spotify_data', function(event, data){
        console.log('hey i need data');
        $scope.trackName = data.spotifyData.track.name;
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

$scope.playSong = function(){
  $('#audio').click(function(){
    var song = document.getElementById('song');
    song.play();
  })
}

$scope.playSong();

}]);
