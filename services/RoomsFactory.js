pottyBreak.factory('RoomsFactory', function RoomsFactory($rootScope, $state, $http, CharactersFactory) {
  var factory = {};
  factory.rooms = $rootScope.appData.rooms;

  factory.currentRoom = function() {
    var stateName = $state.current.name;

    for (var i = 0; i < factory.rooms.length; i++) {
      if (factory.rooms[i]['state'] == stateName) {
        return factory.rooms[i];
      }
    }
    return null;
  };

  factory.nextRoom = function(state) {
    CharactersFactory.increasePPMeter();
    $state.go(state);
  };

  return factory;
});
