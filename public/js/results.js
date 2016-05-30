app.controller('resultsController', ['$scope', 'alchemyAPI', '$http', '$location', function( $scope, alchemyAPI, $http, $location ) {

  $scope.loading = true;

  $scope.$on('emotion_data', function(event, data){
      $scope.loading = false;
      $scope.emotions = data.emotionData;
      console.log($scope.emotions);
    });

}]);
