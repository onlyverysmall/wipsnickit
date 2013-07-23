Wipsnickit.Views.ProjectsIndex = Backbone.View.extend({
  template: JST['projects/index'],

  initialize: function () {
    this.listenTo(this.collection, 'add', this.render)
    this.listenTo(this.collection, 'remove', this.render)
  },

  render: function () {
    var renderedContent = this.template({
      projects: this.collection
    });

    this.$el.html(renderedContent);

    var $tbody = this.$('table');

    this.collection.each(function(project) {
      var row = new Wipsnickit.Views.ProjectRow({
        model: project
      });

      $tbody.append(row.render().$el);
    });

    return this;
  }
});