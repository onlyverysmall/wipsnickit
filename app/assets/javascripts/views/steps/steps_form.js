Wipsnickit.Views.StepsForm = Backbone.View.extend({
  events: {
    'click .add-step' : 'addStep'
  },

  template: JST['steps/form'],

  render: function () {
    var renderedContent = this.template({
      steps: this.collection.models
    });

    this.$el.html(renderedContent);

    return this;
  },

  addStep: function(event) {
    event.preventDefault();
    console.log('clicky');

    this.$('.steps-rows').append('hi');
  }

});
