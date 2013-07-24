Wipsnickit.Views.ProjectForm = Backbone.View.extend({
  events: {
    'click input[type="submit"]': 'submit'
  },

  template: JST['projects/form'],

  render: function () {
    var renderedContent = this.template({
      project: this.model,
      statuses: Wipsnickit.statuses,
      types: Wipsnickit.types
    });

    this.$el.html(renderedContent);

    if (this.model.get('steps')) {
      var steps = new Wipsnickit.Views.StepsForm({
      collection: this.model.get('steps')
    });

      this.$('.steps').append(steps.render().$el);
    } else {

      var blankStep = new Wipsnickit.Models.Step();
      var blankStep2 = new Wipsnickit.Models.Step();
      var stepsColl = new Wipsnickit.Collections.Steps([blankStep, blankStep2]);
      var stepsForm = new Wipsnickit.Views.StepsForm({
        collection: stepsColl
      });

      this.$('.steps').append(stepsForm.render().$el);
    }

    return this;
  },

  submit: function(event) {
    event.preventDefault();

    var that = this;
    var attrs = $(event.target.form).serializeJSON();

    var options = {
      success: function() {    
        Backbone.history.navigate('#', { trigger: true });
      }
    };

    this.model.set(attrs);

    if (this.model.isNew()) {
      this.collection.create(this.model, options);
    } else {
      this.model.save({}, options);
    }
  }
});
