pottyBreak.controller('RoomsCtrl', function RoomsCtrl($scope, $state, RoomsFactory, CharactersFactory) {
  $scope.rooms = RoomsFactory.rooms;
  $scope.RoomsFactory = RoomsFactory;
  $scope.character = CharactersFactory.character;
  $scope.CharactersFactory = CharactersFactory;
});
