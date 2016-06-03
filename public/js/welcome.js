app.controller('welcomeController', ['$scope', '$http', '$location', function( $scope, $http, $location ) {

  $scope.pageClass = 'page-welcome';

  $scope.switchView = function(){
    console.log('clicked!');
    $location.path('/input');
  };

}]);
