app.factory('alchemyAPI', ['$http', '$rootScope', '$timeout', '$resource', function( $http, $rootScope, $timeout, $resource ) {

  var alchemy = {};

  alchemy.getAnalysis = function(textInput) {
    return $http.get('/api/alchemy/results?textInput=' + textInput).then(function(response) {
      console.log(response.data);
      var emotions = angular.fromJson(response.data.docEmotions);
      console.log(emotions);
      console.log(emotions.anger);
      console.log(emotions.sadness);
      console.log(emotions.joy + "!!!!");
      $timeout(function(){
        $rootScope.$broadcast('emotion_data', { emotionData: emotions });
      }, 2000);
    });
  }

  return alchemy;

}])
