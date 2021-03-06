Wipsnickit.Views.StepsIndex = Backbone.View.extend({
  template: JST['steps/index'],

  render: function () {
    var renderedContent = this.template({
      steps: this.collection.models
    });

    this.$el.html(renderedContent);

    return this;
  }

});
