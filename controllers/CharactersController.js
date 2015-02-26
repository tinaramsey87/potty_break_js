pottyBreak.controller('CharactersCtrl', function CharactersCtrl($scope, $state, CharactersFactory) {
  $scope.character = CharactersFactory.character;
  $scope.CharactersFactory = CharactersFactory;
  $scope.createCharacter = function(isValid) {
    if (isValid) {
    $scope.character.name = $scope.name;
    $scope.character.age = $scope.age;
    $scope.character.gender = $scope.gender;
    $state.go('lobby');
    }
  }

});
