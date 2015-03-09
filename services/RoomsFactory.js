pottyBreak.factory('RoomsFactory', function RoomsFactory($state, CharactersFactory) {
  var factory = {};
  factory.rooms = [
    { name:     "Random Office Building Lobby",
      text:     "There is a hallway in front of you and another hallway to your right! Which hallway would you like to head down?!",
      state:    "lobby",
      forward:  "hallway-01",
      right:    "hallway-09"
    }, // 0
    { name:     "Hallway",
      text:     "This is Hallway-01",
      state:    "hallway-01",
      right:    "patio",
      backward: "lobby",
      left:     "hallway-02",
    }, // 1
    { name:     "Hallway",
      text:     "This is Hallway-02",
      state:    "hallway-02",
      right:    "hallway-03",
      behind:   "hallway-01"
    }, // 2
    { name: "Hallway",
      text: "This is Hallway-03",
      state: "hallway-03",
      exits: ["right", "behind", "left"]
    }, // 3
    { name: "Hallway",
      text: "This is Hallway-04",
      state: "hallway-04",
      exits: ["front", "behind", "left"]
    }, // 4
    { name: "Hallway",
      text: "This is Hallway-05",
      state: "hallway-05",
      exits: ["front", "behind", "left"]
    }, //5
    { name: "Hallway",
      text: "This is Hallway-06",
      state: "hallway-06",
      exits: ["front", "behind", "left"]
    }, // 6
    { name: "Hallway",
      text: "This is Hallway-07",
      state: "hallway-07",
      exits: ["front", "right", "behind"]
    }, // 7
    { name: "Hallway",
      text: "This is Hallway-08",
      state: "hallway-08",
      exits: ["right", "behind"]
    }, // 8
    { name: "Hallway",
      text: "This is Hallway-09",
      state: "hallway-09",
      exits: ["front", "behind", "left"]
    }, // 9
    { name: "Hallway",
      text: "This is Hallway-10",
      state: "hallway-10",
      exits: ["front", "behind", "left"]
    }, // 10
    { name: "Hallway",
      text: "This is Hallway-11",
      state: "hallway-11",
      exits: ["behind", "left"]
    }, // 11
    { name: "Hallway",
      text: "This is Hallway-12",
      state: "hallway-12",
      exits: ["front", "behind", "left"]
    }, // 12
    { name: "Hallway",
      text: "This is Hallway-13",
      state: "hallway-13",
      exits: ["front", "behind", "left"]
    }, // 13
    { name: "Hallway",
      text: "This is Hallway-14",
      state: "hallway-14",
      exits: ["behind", "left"]
    }, // 14
    { name: "Hallway",
      text: "This is Hallway-15",
      state: "hallway-15",
      exits: ["behind", "left"]
    }, // 15
  ];

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
