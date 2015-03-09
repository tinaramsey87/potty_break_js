pottyBreak.factory('RoomsFactory', function RoomsFactory($state, $http, CharactersFactory) {
  var factory = {};
  factory.rooms = [];

  $http.get('/js/rooms.json').success(function(data) {
    factory.rooms = data.rooms;
  });

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
