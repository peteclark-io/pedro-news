'use strict'

$.get('/md/20160908.md').then(data => {
  var md = window.markdownit();
  var result = md.render(data);

  document.getElementById('markdown').innerHTML = result;
});
