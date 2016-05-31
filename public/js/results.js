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
        console.log(data.spotifyData.playlists);
        $scope.playlists = data.spotifyData.playlists.items;
      })
    });
  };

}]);
