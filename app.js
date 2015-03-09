var pottyBreak = angular.module('pottyBreak', ['ui.router']);

pottyBreak.config(function($stateProvider, $urlRouterProvider) {
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

  $stateProvider.state('hallway-02', {
    url: "/rooms",
    templateUrl: "partials/rooms.html",
    controller: "RoomsCtrl"
  });

  $stateProvider.state('hallway-03', {
    url: "/rooms",
    templateUrl: "partials/rooms.html",
    controller: "RoomsCtrl"
  });

  $stateProvider.state('hallway-04', {
    url: "/rooms",
    templateUrl: "partials/rooms.html",
    controller: "RoomsCtrl"
  });

  $stateProvider.state('hallway-05', {
    url: "/rooms",
    templateUrl: "partials/rooms.html",
    controller: "RoomsCtrl"
  });

  $stateProvider.state('hallway-06', {
    url: "/rooms",
    templateUrl: "partials/rooms.html",
    controller: "RoomsCtrl"
  });

  $stateProvider.state('hallway-07', {
    url: "/rooms",
    templateUrl: "partials/rooms.html",
    controller: "RoomsCtrl"
  });
});
