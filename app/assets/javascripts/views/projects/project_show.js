Wipsnickit.Views.ProjectView = Backbone.View.extend({
  template: JST['projects/show'],

  render: function () {
    var renderedContent = this.template({
      project: this.model
    });

    this.$el.html(renderedContent);

    return this;
  }

});