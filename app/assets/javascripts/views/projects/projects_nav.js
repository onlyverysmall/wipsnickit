Wipsnickit.Views.ProjectsNav = Backbone.View.extend({
  tagName: 'ul',

  className: 'nav nav-tabs',

  template: JST['projects/nav'],

  initialize: function(options) {
    this.route = options.route;
    this.model = options.model;
  },

  render: function () {

    switch (this.route) { 
      case '': 
        this.homeClass = 'active'; 
        break; 
      case 'api/projects/new': 
        this.newProjectClass = 'active';
        break;
      default: 
        break; 
    }

    var renderedContent = this.template();

    this.$el.html(renderedContent);

    return this;
  }
});