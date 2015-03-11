pottyBreak.factory('AppDataFactory', function AppDataFactory($http) {
  var factory = {};
  factory.setup = [];
  factory.rooms = [];

  $http.get('/js/appData.json').success(function(data) {
    factory.setup = data.setup;
    factory.rooms = data.rooms;
    routeBuilder();
  });

  return factory;
});
