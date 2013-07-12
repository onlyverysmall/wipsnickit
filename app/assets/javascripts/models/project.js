Wipsnickit.Models.Project = Backbone.Model.extend({
  parse: function (response) {
    if (response) {
      var stepsJSON = response.steps;
      var stepsCollection = new Wipsnickit.Collections.Steps(stepsJSON);
      response.steps = stepsCollection;
    }
    return response;
  },

  // this isn't working
  toJSON: function () {
    var attrs = _.clone(this.attributes);
    var json = { project: attrs.project };

    //json.project.steps_attributes = this.get('steps').toJSON();
    //json.project.steps_attributes = json.project.steps;
    var steps_attributes = {};
    for (var i = 0; i < json.project.steps.length; i++) {
      var step = json.project.steps[i];
      steps_attributes[i] = step;
    }
    json.project.steps_attributes = steps_attributes;
    delete json.project.steps;

    return json;
  }, 

  edit: function () {
    // console.log(this);
  }
});