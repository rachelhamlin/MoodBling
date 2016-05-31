app.factory('alchemyAPI', ['$http', '$rootScope', '$timeout', function( $http, $rootScope, $timeout ) {

  var alchemy = {};

  alchemy.getAnalysis = function(textInput) {
    return $http.get('/api/alchemy/results?textInput=' + textInput).then(function(response) {
      console.log(response.data);
      var emotions = response.data.docEmotions;
      $timeout(function(){
        $rootScope.$broadcast('emotion_data', { emotionData: emotions });
      }, 2000);
    });
  }

  return alchemy;

}]);
