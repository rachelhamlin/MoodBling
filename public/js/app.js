console.log('hey girl, whats up, its the end of the day');

var app = angular.module('MoodApp', [
  'ngRoute',
  'angular-spinkit'
]);

app.config(['$routeProvider', function( $routeProvider ) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/partials/input.html',
      controller: 'inputController'
    })

    .when('/results', {
      templateUrl: '/views/partials/results.html',
      controller: 'resultsController'
    })

    .otherwise({
      redirectTo: '/index'
    })

}]);
