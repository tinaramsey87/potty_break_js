var pottyBreak = angular.module('pottyBreak', ['ui.router','ngSanitize']);

pottyBreak.run(function(AppDataFactory) {
  routeBuilder = function() {
    for (i = 0; i < AppDataFactory.rooms.length; i++) {
      currentState = AppDataFactory.rooms[i]['state'];
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
  $stateProvider.state('you-lose', {
    url:"/you-are-a-loser",
    templateUrl: "partials/lose.html",
    controller: "CharactersCtrl"
  });
  $stateProviderRef = $stateProvider;
  $urlRouterProvider.otherwise("/");
});
