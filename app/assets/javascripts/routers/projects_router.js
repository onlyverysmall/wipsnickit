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

    that._appendNav();

    Wipsnickit.statuses.fetch();
    Wipsnickit.types.fetch();

    that._withProjects(function(projects) {
      var indexView = new Wipsnickit.Views.ProjectsIndex({
        collection: Wipsnickit.projects
      });

      that._appendView(indexView);
    });
  },

  show: function(id) {
    var that = this;

    that._withProject(id, function(project) {
      that._appendNav(project);
      var showView = new Wipsnickit.Views.ProjectView({
        model: project
      });

      that._appendView(showView);
    });
  },

  edit: function(id) {
    var that = this;

    that._withProject(id, function(project) {
      that._appendNav(project);
      var editView = new Wipsnickit.Views.ProjectForm({
        model: project,
      });

      that._appendView(editView);
    });
  },

  new: function() {
    var that = this;

    that._appendNav();

    var newView = new Wipsnickit.Views.ProjectForm({
      collection: Wipsnickit.projects,
      model: new Wipsnickit.Models.Project()
    });

    that._appendView(newView);
  },

  _appendNav: function(project) {
    this.$rootEl.empty();

    var route = Backbone.history.fragment;
    var navView = new Wipsnickit.Views.ProjectsNav({ 
      route: route,  
      model: project
    });
    this.$rootEl.append(navView.render().el);
  },

  _appendView: function(newView) {
    this.$rootEl.append(newView.render().$el);
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
