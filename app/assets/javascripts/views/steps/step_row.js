Wipsnickit.Views.StepRow = Backbone.View.extend({
  initialize: function(options) {
    this.idx = options.idx;
  },

  tagName: 'li',
  className: 'step-row',
  
  template: JST['steps/step_row'],

  render: function () {
    var renderedContent = this.template({
      step: this.model
    });
    this.$el.html(renderedContent);
  
    return this;
  }

});
