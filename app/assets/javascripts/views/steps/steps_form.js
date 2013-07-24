Wipsnickit.Views.StepsForm = Backbone.View.extend({
  template: JST['steps/form'],

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    var $stepsRows = this.$('.steps-rows');

    var steps = this.collection.models;
    _(steps).each(function(step, idx) {
      var stepRow = new Wipsnickit.Views.StepRow({
        model: step,
        idx: idx
      });

      $stepsRows.append(stepRow.render().$el);
    });

    var addStepBtn = new Wipsnickit.Views.AddStepBtn();
    this.$('.add-step').append(addStepBtn.render().$el);

    return this;
  }

});