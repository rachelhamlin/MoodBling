app.factory('alchemyAPI', ['$http', '$rootScope', '$timeout', function( $http, $rootScope, $timeout ) {

  var alchemy = {};

  alchemy.getAnalysis = function(textInput) {
    return $http.get('http://gateway-a.watsonplatform.net/calls/text/TextGetEmotion?apikey=397940cb2b4f38eae9ec9886d64ae850e520c4f7&outputMode=json&text=' + textInput).then(function(response){
      var emotions = response.data.docEmotions;
      console.log(emotions);
      console.log(emotions.anger);
      console.log(emotions.sadness);
      console.log(emotions.joy + "!!!!");
      $timeout(function(){
        $rootScope.$broadcast('emotion_data', { emotionData: emotions });
      }, 3000);
    });
  }

  return alchemy;

}])
