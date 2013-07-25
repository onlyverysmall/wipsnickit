Wipsnickit.Views.ProjectRow = Backbone.View.extend({
  tagName: 'tbody',

  events: {
    'click tr': 'editRow'
  },

  initialize: function () {
    // put data-id?
  },

  template: JST['projects/project_row'],

  render: function () {
    var renderedContent = this.template({
      project: this.model
    });

    this.$el.html(renderedContent);

    return this;
  },

  editRow: function(event) {
    var id = $(event.currentTarget).attr('data-id');
    
    // create a function on the model to edit the row, call it here
    this.model.edit();
  }

});
