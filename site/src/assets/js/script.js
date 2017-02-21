'use strict';

(function() {

var RAW_URL = 'https://cdn.rawgit.com/arkon/uoft-enrolment-charts/master/';

var getRepoTree = function(cb) {
  $.getJSON('https://api.github.com/repos/arkon/uoft-enrolment-charts/git/trees/master?recursive=1', cb);
};

var getDeptFromPath = function(path) {
  return path.substring(path.indexOf('/') + 1);
};

var getCourseFromPath = function(path) {
  var fileDir = path.lastIndexOf('/') + 1;
  var ext = path.indexOf('.svg');

  return path.substring(fileDir, ext);
};

var getCharts = function(data) {
  var charts = data.tree.filter(function(item) { return item.path.indexOf('charts/') === 0; });

  var $elCourses = $('#courses');
  $elCourses.html('');

  var $elDept, $elCourse;

  for (var i = 0; i < charts.length; i++) {
    var chart = charts[i];

    if (chart.type === 'tree') {
      $elDept = $('<details><summary>' + getDeptFromPath(chart.path) + '</summary></details>');
      $elCourses.append($elDept);
    } else if (chart.type === 'blob') {
      $elCourse = $('<li>').text(getCourseFromPath(chart.path));
      $elCourse.addClass('course');
      $elCourse.attr('data-chart', chart.path);

      $elDept.append($elCourse);
    }
  }
};

var createIMG = function(url) {
  var elImg = document.createElement('IMG');
  elImg.src = url;

  return elImg;
};

var registerClickEvents = function() {
  $(document).on('click', '.course', function(e) {
    var courseSvg = e.currentTarget.dataset.chart;
    var elImg = createIMG(RAW_URL + courseSvg);

    $('#chart').html(elImg);
  });
};

var main = function() {
  getRepoTree(getCharts);
  registerClickEvents();
};

main();

})();