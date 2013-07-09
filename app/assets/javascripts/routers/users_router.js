Wipsnickit.Routers.Users = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index",
    "users/:id": "show"
  }, 

  index: function() {
    var that = this;

    var users = Wipsnickit.users.fetch();
    var indexView = new Wipsnickit.Views.UsersIndex({
      collection: Wipsnickit.users
    });

    that.$rootEl.html(indexView.render().$el);
  },

  show: function(id) {
    var that = this;

    var user = Wipsnickit.users.get(id);

    var showView = new Wipsnickit.Views.UserShow({
      model: user
    });

    console.log("woo a thing?")

    that.$rootEl.html(indexView.render().$el);
  }

});
