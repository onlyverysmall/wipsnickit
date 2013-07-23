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

      this.$('form').append(steps.render().$el);
    } else {

      var blankStep = new Wipsnickit.Models.Step();
      var steps = new Wipsnickit.Collections.Steps(blankStep);
      var steps = new Wipsnickit.Views.StepsForm({
        collection: steps
      });

      this.$('form').append(steps.render().$el);
    }

    return this;
  },

  submit: function(event) {
    event.preventDefault();
    console.log('you submitted! have a cookie');

    var that = this;
    var attrs = $(event.target.form).serializeJSON();

    var options = {
      success: function() {    
        Backbone.history.navigate('#', { trigger: true });
      }
    };

    this.model.set(attrs);

    if (this.model.isNew()) {
      console.log('this is a new model!');
      this.collection.create(this.model, options);
    } else {
      console.log('this isn\'t a new model!');
      this.model.save({}, options);
    }
  }
});
