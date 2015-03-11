pottyBreak.controller('CharactersCtrl', function CharactersCtrl($scope, $state, CharactersFactory, AppDataFactory) {
  $scope.character = CharactersFactory.character;
  $scope.CharactersFactory = CharactersFactory;
  $scope.AppDataFactory = AppDataFactory;

  $scope.wipeCharacter = function() {
    $scope.character.name = null;
    $scope.character.age = null;
    $scope.character.gender = null;
    $scope.CharactersFactory.character.pp = 0;
    $state.go('character-creator');
  }

  $scope.createCharacter = function(isValid) {
    if (isValid) {
      $scope.character.name = $scope.name;
      $scope.character.age = $scope.age;
      $scope.character.gender = $scope.gender;
      $state.go('lobby');
    }
  };
});
