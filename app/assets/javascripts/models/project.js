Wipsnickit.Models.Project = Backbone.Model.extend({
  parse: function (response) {
    if (response) {
      var stepsJSON = response.steps;
      var stepsCollection = new Wipsnickit.Collections.Steps(stepsJSON);
      response.steps = stepsCollection;
    }
    return response;
  },

  toJSON: function () {
    var attrs = _.clone(this.attributes);
    var json = { project: attrs.project };

    var steps_attributes = {};

    if (json.project.steps) {  
      for (var i = 0; i < json.project.steps.length; i++) {
        var step = json.project.steps[i];
        
        // strip out empty steps before sending up to server
        if (step.name === '') {
          delete step;
        } else {
          steps_attributes[i] = step;
        } 
      }
    }
    
    json.project.steps_attributes = steps_attributes;
    delete json.project.steps;

    return json;
  }, 

  edit: function () {
    
  }
});