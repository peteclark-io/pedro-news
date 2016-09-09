'use strict'

$.get('/day1.md').then(data => {
  var md = window.markdownit();
  var result = md.render(data);

  document.getElementById('markdown').innerHTML = result;
});
