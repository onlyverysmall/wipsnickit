Wipsnickit.Views.AddStepBtn = Backbone.View.extend({
  events: {
    'click .add-step' : 'addStep'
  },

  template: JST['steps/add_step_btn'],

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    return this;
  },

  addStep: function(event) {
    event.preventDefault();

    var idx = $('.steps-rows').children().last().children().first().data('id') + 1;
    
    var stepRow = new Wipsnickit.Views.StepRow({
        model: new Wipsnickit.Models.Step(),
        idx: idx
      });

    $('.steps-rows').append(stepRow.render().$el);
  }

});
