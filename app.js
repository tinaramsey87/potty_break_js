var pottyBreak = angular.module('pottyBreak', ['ui.router']);

pottyBreak.config(function($stateProvider) {

  $stateProvider.state('character-creator', {
    url: "",
    templateUrl: "partials/character-creator.html",
    controller: "CharactersCtrl"
  });

  $stateProvider.state('lobby', {
    url: "/?!",
    templateUrl: "partials/lobby.html",
    controller: "CharactersCtrl"
  });

  $stateProvider.state('hallway-01', {
    url: "/?!",
    templateUrl: "partials/hallway-01.html",
    controller: "CharactersCtrl"
  });
});
