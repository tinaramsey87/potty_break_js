pottyBreak.factory('CharactersFactory', function CharactersFactory() {
  var factory = {};
  factory.character = { pp: 0 };
  factory.increasePPMeter = function() {
    factory.character.pp++;
  };
  return factory;
});
