console.log("Sanity Check: JS is working!");
var template;
var $projectList;
var allProjects = [];

$(document).ready(function(){

  $projectList = $('#projectTarget');

  var source = $('#project-template').html();
  template = Handlebars.compile(source);

  $.ajax({
    method: 'GET',
    url: '/api/project',
    success: handleSuccess,
    error: handleError
  });

});

function handleSuccess(json) {
  allProjects = json;
  render();
}

function handleError(e) {
  console.log('uh oh');
  $('#projectTarget').text('Failed to load projects, is the server working?');
}
