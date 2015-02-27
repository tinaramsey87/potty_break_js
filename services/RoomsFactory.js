pottyBreak.factory('RoomsFactory', function RoomsFactory($state, CharactersFactory) {
  var factory = {};

  factory.nextRoom = function(state) {
    console.log(state);
    CharactersFactory.increasePPMeter();
    var index = indexOf('state');
    console.log(index);
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
    { name: "Hallway", state: "hallway-02", exits: ["right", "behind"] },
    { name: "Hallway", state: "hallway-03", exits: ["right", "behind", "left"] },
    { name: "Hallway", state: "hallway-04", exits: ["front", "behind", "left"] },
    { name: "Hallway", state: "hallway-05", exits: ["front", "behind", "left"] },
    { name: "Hallway", state: "hallway-06", exits: ["front", "behind", "left"] },
    { name: "Hallway", state: "hallway-07", exits: ["front", "right", "behind"] },
    { name: "Hallway", state: "hallway-08", exits: ["right", "behind"] },
    { name: "Hallway", state: "hallway-09", exits: ["front", "behind", "left"] },
    { name: "Hallway", state: "hallway-10", exits: ["front", "behind", "left"] },
    { name: "Hallway", state: "hallway-11", exits: ["behind", "left"] },
    { name: "Hallway", state: "hallway-12", exits: ["front", "behind", "left"] },
    { name: "Hallway", state: "hallway-13", exits: ["front", "behind", "left"] },
    { name: "Hallway", state: "hallway-14", exits: ["behind", "left"] },
    { name: "Hallway", state: "hallway-14", exits: ["behind", "left"] },
  ];
  return factory;
});
