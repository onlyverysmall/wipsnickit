Wipsnickit.Routers.Projects = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'index',
    'api/projects/new': 'new',
    'api/projects/:id': 'show',
    'api/projects/:id/edit': 'edit'
  }, 

  index: function() {
    var that = this;
    
    that._withProjects(function(projects) {
      var indexView = new Wipsnickit.Views.ProjectsIndex({
        collection: Wipsnickit.projects
      });

      that._swapView(indexView);
    });
  },

  show: function(id) {
    var that = this;

    that._withProject(id, function(project) {
      var showView = new Wipsnickit.Views.ProjectView({
        model: project
      });

      that._swapView(showView);
    });
  },

  edit: function(id) {
    var that = this;

    that._withProject(id, function(project) {
      var editView = new Wipsnickit.Views.ProjectForm({
        model: project
      });

      that._swapView(editView);
    });
  },

  new: function() {
    var that = this;

    var newView = new Wipsnickit.Views.ProjectForm({
      collection: Wipsnickit.projects,
      model: new Wipsnickit.Models.Project()
    });

    that._swapView(newView);
  },

  _swapView: function(newView) {
    this.$rootEl.html(newView.render().$el);
  },

  _withProject: function(id, callback) {
    var project = Wipsnickit.projects.get(id);

    callback(project);
  },

  _withProjects: function(callback) {
    Wipsnickit.projects.fetch({
      success: callback
    });
  }
});
