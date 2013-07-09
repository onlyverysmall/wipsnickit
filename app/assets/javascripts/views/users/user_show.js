Wipsnickit.Views.UserShow = Backbone.View.extend({
  template: JST['users/show'],

  render: function () {
    var renderedContent = this.template({
      users: this.collection
    });

    this.$el.html(renderedContent);

    return this;
  }

});
