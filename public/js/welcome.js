app.controller('welcomeController', ['$scope', '$http', '$location', function( $scope, $http, $location ) {

  $scope.switchView = function(){
    console.log('clicked!');
    $location.path('/input');
  };

}]);
