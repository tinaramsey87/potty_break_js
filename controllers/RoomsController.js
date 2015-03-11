pottyBreak.controller('RoomsCtrl', function RoomsCtrl($scope, $state, RoomsFactory, CharactersFactory, AppDataFactory) {
  $scope.rooms = RoomsFactory.rooms;
  $scope.RoomsFactory = RoomsFactory;
  $scope.character = CharactersFactory.character;
  $scope.CharactersFactory = CharactersFactory;
  $scope.AppDataFactory = AppDataFactory;
});
