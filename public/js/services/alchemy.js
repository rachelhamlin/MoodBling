app.factory('alchemyAPI', ['$http', '$rootScope', function( $http, $rootScope ) {

  var alchemy = {};
  alchemy.emotions = {};
  alchemy.anger    = '';
  alchemy.sadness  = '';
  alchemy.joy      = '';
  alchemy.fear     = '';
  alchemy.disgust  = '';

  alchemy.getAnalysis = function(textInput) {
    return $http.get('http://gateway-a.watsonplatform.net/calls/text/TextGetEmotion?apikey=397940cb2b4f38eae9ec9886d64ae850e520c4f7&outputMode=json&text=' + textInput).then(function(response){
      this.emotions = response.data.docEmotions;
      this.anger = this.emotions.anger;
      this.sadness = this.emotions.sadness;
      this.joy = this.emotions.joy;
      this.fear = this.emotions.fear;
      this.digust = this.emotions.disgust;
      this.broadcastObject();
    })
  };

  alchemy.broadcastObject = function() {
    $rootScope.$broadcast('handleBroadcast');
  };

    // return {
    //   getAnalysis: function(textInput) {
    //     return $http.get('http://gateway-a.watsonplatform.net/calls/text/TextGetEmotion?apikey=397940cb2b4f38eae9ec9886d64ae850e520c4f7&outputMode=json&text=' + textInput).then(function(response){
    //       this.emotions = response.data.docEmotions;
    //       this.broadcastObject();
    //     });
    //   }
    // }

}])
