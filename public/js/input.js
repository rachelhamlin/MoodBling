app.controller('inputController', ['$scope', 'alchemyAPI', '$http', '$location', function( $scope, alchemyAPI, $http, $location ) {

  $scope.sendInput = function(textInput) {
    console.log(textInput);
    alchemyAPI.getAnalysis(textInput).then(function(response){
      console.log('alchemy data go')
      $location.path('/results');
    })
  }

}]);
