app.factory('spotifyAPI', ['$http', '$rootScope', '$timeout', function( $http, $rootScope, $timeout ) {

var spotify = {};

  spotify.getJoy = function() {
    return $http.get('/api/spotify/joy').success(function(response) {
      console.log(response);
        $rootScope.$broadcast('spotify_data', { spotifyData: response });
      }, 1000);
    };

  spotify.getAnger = function() {
    return $http.get('/api/spotify/anger').success(function(response) {
      console.log(response);
        $rootScope.$broadcast('spotify_data', { spotifyData: response });
      }, 1000);
  }

  spotify.getSadness = function() {
    return $http.get('/api/spotify/sadness').success(function(response) {
      console.log(response);
        $rootScope.$broadcast('spotify_data', { spotifyData: response });
      }, 1000);
  }

  spotify.getFear = function() {
    return $http.get('/api/spotify/fear').success(function(response) {
      console.log(response);
        $rootScope.$broadcast('spotify_data', { spotifyData: response });
      }, 1000);
  }

  spotify.getDisgust = function() {
    return $http.get('/api/spotify/disgust').success(function(response) {
      console.log(response);
        $rootScope.$broadcast('spotify_data', { spotifyData: response });
      }, 1000);
  }

return spotify;

}]);
