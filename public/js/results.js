app.controller('resultsController', ['$scope', 'alchemyAPI', '$http', '$location', function( $scope, alchemyAPI, $http, $location ) {

  $scope.on('handleBroadcast', function() {
    $scope.anger = alchemyAPI.anger;
    console.log($scope.anger);
  })


}]);
