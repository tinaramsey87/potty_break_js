var pottyBreak = angular.module('pottyBreak', ['ui.router']);

pottyBreak.config(function($stateProvider) {
  $stateProvider.state('character-creator', {
    url: "",
    templateUrl: "partials/character-creator.html",
    controller: "CharactersCtrl"
  });

  $stateProvider.state('lobby', {
    url: "/rooms",
    templateUrl: "partials/rooms.html",
    controller: "RoomsCtrl"
  });

  $stateProvider.state('hallway-01', {
    url: "/rooms",
    templateUrl: "partials/rooms.html",
    controller: "RoomsCtrl"
  });

  $stateProvider.state('hallway-09', {
    url: "/rooms",
    templateUrl: "partials/rooms.html",
    controller: "RoomsCtrl"
  });
});
