Wipsnickit.Views.StepsForm = Backbone.View.extend({
  template: JST['steps/form'],

  render: function () {
    var renderedContent = this.template({
      steps: this.collection.models
    });

    this.$el.html(renderedContent);

    return this;
  }

});
