'use strict';

$(document).on('click', '.course', function(e) {
  var courseSvg = e.currentTarget.dataset.chart;

  var elImg = document.createElement('IMG');
  elImg.src = courseSvg;

  $('#chart').html(elImg);
  window.scrollTo(0, 0);
});
