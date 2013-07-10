Wipsnickit.Views.ProjectForm = Backbone.View.extend({
  events: {
    'click input[type="submit"]': 'submit'
  },

  template: JST['projects/form'],

  render: function () {
    var renderedContent = this.template({
      project: this.model
    });

    this.$el.html(renderedContent);

    return this;
  },

  submit: function(event) {
    event.preventDefault();
    
    var attrs = $(event.target.form).serializeJSON();

    var options = {
      success: function() {
        Backbone.history.navigate('#', { trigger: true });
      }
    };

    this.model.set(attrs);
    console.log(this.model)
    if (this.model.isNew()) {
      this.collection.create(this.model, options);
    } else {
      this.model.save({}, options);
    }
  }
});
