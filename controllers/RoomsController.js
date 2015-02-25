pottyBreak.controller('RoomsCtrl', function RoomsCtrl($scope, RoomsFactory) {
  $scope.rooms = RoomsFactory.rooms;
  $scope.RoomsFactory = RoomsFactory;
});
