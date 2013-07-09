window.Wipsnickit = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from Backbone!');

    Wipsnickit.users = new Wipsnickit.Collections.Users();

    new Wipsnickit.Routers.Users({
      $rootEl: $('#content')
    });
    Backbone.history.start();
  }
};

