pottyBreak.factory('RoomsFactory', function RoomsFactory($state, CharactersFactory) {
  var factory = {};

  factory.nextRoom = function(state) {
    CharactersFactory.increasePPMeter();
    console.log(state)
    // var index = indexOf(state);
    $state.go(state);
  };

  factory.rooms = [
    { name: "Random Office Building Lobby",
      text: "There is a hallway in front of you and another hallway to your right! Which hallway would you like to head down?!",
      state: "lobby",
      exits: ["front", "right"]
    }, // 0
    { name: "Hallway",
      text: "Text goes here!",
      state: "hallway-01",
      exits: ["right", "behind", "left"]
    }, // 1
    { name: "Hallway",
      text: "Text goes here!",
      state: "hallway-02",
      exits: ["right", "behind"]
    }, // 2
    { name: "Hallway",
      text: "Text goes here!",
      state: "hallway-03",
      exits: ["right", "behind", "left"]
    }, // 3
    { name: "Hallway",
      text: "Text goes here!",
      state: "hallway-04",
      exits: ["front", "behind", "left"]
    }, // 4
    { name: "Hallway",
      text: "Text goes here!",
      state: "hallway-05",
      exits: ["front", "behind", "left"]
    }, //5
    { name: "Hallway",
      text: "Text goes here!",
      state: "hallway-06",
      exits: ["front", "behind", "left"]
    }, // 6
    { name: "Hallway",
      text: "Text goes here!",
      state: "hallway-07",
      exits: ["front", "right", "behind"]
    }, // 7
    { name: "Hallway",
      text: "Text goes here!",
      state: "hallway-08",
      exits: ["right", "behind"]
    }, // 8
    { name: "Hallway",
      text: "Text goes here!",
      state: "hallway-09",
      exits: ["front", "behind", "left"]
    }, // 9
    { name: "Hallway",
      text: "Text goes here!",
      state: "hallway-10",
      exits: ["front", "behind", "left"]
    }, // 10
    { name: "Hallway",
      text: "Text goes here!",
      state: "hallway-11",
      exits: ["behind", "left"]
    }, // 11
    { name: "Hallway",
      text: "Text goes here!",
      state: "hallway-12",
      exits: ["front", "behind", "left"]
    }, // 12
    { name: "Hallway",
      text: "Text goes here!",
      state: "hallway-13",
      exits: ["front", "behind", "left"]
    }, // 13
    { name: "Hallway",
      text: "Text goes here!",
      state: "hallway-14",
      exits: ["behind", "left"]
    }, // 14
    { name: "Hallway",
      text: "Text goes here!",
      state: "hallway-14",
      exits: ["behind", "left"]
    }, // 15
  ];
  return factory;
});
