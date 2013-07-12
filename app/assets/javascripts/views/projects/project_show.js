Wipsnickit.Views.ProjectView = Backbone.View.extend({
  template: JST['projects/show'],

  render: function () {
    var renderedContent = this.template({
      project: this.model
    });

    this.$el.html(renderedContent);

    var row = new Wipsnickit.Views.ProjectRow({
        model: this.model
      });

    this.$('table').append(row.render().el);

    var steps = new Wipsnickit.Views.StepsIndex({
      collection: this.model.get('steps')
    });

    this.$el.append(steps.render().el);

    return this;
  }

});

