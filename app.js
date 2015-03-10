var pottyBreak = angular.module('pottyBreak', ['ui.router']);

pottyBreak.run(function($http, $rootScope) {
  $http.get('/js/appData.json').success(function(data) {
    $rootScope.appData = data;
    routeBuilder();
  });

  routeBuilder = function() {
    for (i = 0; i < $rootScope.appData.rooms.length; i++) {
      currentState = $rootScope.appData.rooms[i]['state'];
      $stateProviderRef.state(currentState, {
        url: "/rooms",
        templateUrl: "partials/rooms.html",
        controller: "RoomsCtrl"
      });
    }
  }
});

pottyBreak.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('character-creator', {
    url: "/",
    templateUrl: "partials/character-creator.html",
    controller: "CharactersCtrl"
  });
  $stateProviderRef = $stateProvider;
  $urlRouterProvider.otherwise("/");
});
