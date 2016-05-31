app.factory('spotifyAPI', ['$http', '$rootScope', '$timeout', function( $http, $rootScope, $timeout ) {

var spotify = {};

  spotify.testFunction = function() {
    return $http.get('/api/spotify/playlists').success(function(response) {
      console.log(response);
        $rootScope.$broadcast('spotify_data', { spotifyData: response });
      }, 1000);
    };

return spotify;

}]);
