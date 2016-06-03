app.factory('spotifyAPI', ['$http', '$rootScope', '$timeout', function( $http, $rootScope, $timeout ) {

var spotify = {};

  spotify.getJoy = function() {
    return $http.get('/api/spotify/emotion/happy').success(function(response) {
      console.log(response);
        $rootScope.$broadcast('spotify_data', { spotifyData: response });
      }, 1000);
    };

  spotify.getAnger = function() {
    return $http.get('/api/spotify/emotion/angry').success(function(response) {
      console.log(response);
        $rootScope.$broadcast('spotify_data', { spotifyData: response });
      }, 1000);
  }

  spotify.getSadness = function() {
    return $http.get('/api/spotify/emotion/blues').success(function(response) {
      console.log(response);
        $rootScope.$broadcast('spotify_data', { spotifyData: response });
      }, 1000);
  }

  spotify.getFear = function() {
    return $http.get('/api/spotify/emotion/chill').success(function(response) {
      console.log(response);
        $rootScope.$broadcast('spotify_data', { spotifyData: response });
      }, 1000);
  }

  spotify.getDisgust = function() {
    return $http.get('/api/spotify/emotion/happy').success(function(response) {
      console.log(response);
        $rootScope.$broadcast('spotify_data', { spotifyData: response });
      }, 1000);
  }

return spotify;

}]);
