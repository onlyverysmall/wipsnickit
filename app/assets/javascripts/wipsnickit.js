window.Wipsnickit = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Wipsnickit.projects = new Wipsnickit.Collections.Projects();

    new Wipsnickit.Routers.Projects({
      $rootEl: $('#content')
    });
    Backbone.history.start();
  }
};

