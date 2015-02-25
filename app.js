var pottyBreak = angular.module('pottyBreak', ['ui.router']);

pottyBreak.config(function($stateProvider) {

  $stateProvider.state('character-creator', {
    url: "",
    templateUrl: "partials/character-creator.html",
    controller: 'CharactersCtrl'
  });

});
