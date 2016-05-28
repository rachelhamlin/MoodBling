app.controller('inputController', ['$scope', '$http', '$location', function( $scope, $http, $location ) {

   $scope.sendInput = function(textInput) {
     $http.get('http://gateway-a.watsonplatform.net/calls/text/TextGetEmotion?apikey=397940cb2b4f38eae9ec9886d64ae850e520c4f7&outputMode=json&text=' + textInput).then(function(response){
       var emotions = response.data.docEmotions;
       $scope.anger = emotions.anger;
       console.log($scope.emotions);
      //  $location.path('/results');
     })
   }

}]);
