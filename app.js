var pottyBreak = angular.module('pottyBreak', ['ui.router']);

pottyBreak.run(function($http, $rootScope) {
  $http.get('/js/appData.json').success(function(data) {
    $rootScope.appData = data;
  });
});

pottyBreak.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('character-creator', {
    url: "/",
    templateUrl: "partials/character-creator.html",
    controller: "CharactersCtrl"
  });

  $stateProvider.state('lobby', {
    url: "/rooms",
    templateUrl: "partials/rooms.html",
    controller: "RoomsCtrl"
  });

  $urlRouterProvider.otherwise("/");
});
