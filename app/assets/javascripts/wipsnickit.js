window.Wipsnickit = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Wipsnickit.projects = new Wipsnickit.Collections.Projects();
    Wipsnickit.statuses = new Wipsnickit.Collections.Statuses();
    Wipsnickit.types = new Wipsnickit.Collections.Types();

    new Wipsnickit.Routers.Projects({
      $rootEl: $('#content')
    });
    Backbone.history.start();
  }
};

