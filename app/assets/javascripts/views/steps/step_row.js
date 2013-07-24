Wipsnickit.Views.StepRow = Backbone.View.extend({
  template: JST['steps/step_row'],

  initialize: function(options) {
    this.idx = options.idx;
  },

  render: function () {
    var renderedContent = this.template({
      step: this.model
    });
    this.$el.html(renderedContent);
    
    return this;
  }

});
