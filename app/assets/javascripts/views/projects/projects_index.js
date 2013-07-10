Wipsnickit.Views.ProjectsIndex = Backbone.View.extend({
  events: {
    'click tr': 'editRow'
  },

  template: JST['projects/index'],

  initialize: function () {
    this.listenTo(this.collection, 'change', this.render)
  },

  render: function () {
    var renderedContent = this.template({
      projects: this.collection
    });

    this.$el.html(renderedContent);

    return this;
  },

  editRow: function(event) {
    var id = $(event.currentTarget).attr('data-id');

    // create a function on the model to edit the row, call it here
    
  }

});
