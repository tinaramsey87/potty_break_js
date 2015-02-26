var pottyBreak = angular.module('pottyBreak', ['ui.router']);

pottyBreak.config(function($stateProvider) {

  $stateProvider.state('character-creator', {
    url: "",
    templateUrl: "partials/character-creator.html",
    controller: 'CharactersCtrl'
  });

  $stateProvider.state('lobby', {
    url: "/lobby",
    templateUrl: "partials/lobby.html",
    controller: 'CharactersCtrl'
  });

});
