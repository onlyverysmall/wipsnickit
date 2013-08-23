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

    // This is a really hilarious hack. Ned would murder you if he saw you doing this.
    var currentIndex = $('.steps-rows').children().last().children().first().data('id');

    console.log(currentIndex);
    if (!currentIndex) {
      var idx = 0;
    } else {
      var idx = currentIndex + 1;
    }

    var stepRow = new Wipsnickit.Views.StepRow({
        model: new Wipsnickit.Models.Step(),
        idx: idx
      });

    $('.steps-rows').append(stepRow.render().$el);
  }

});
