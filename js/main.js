'use strict'

var latest = 'md/20160927.md';

var paths = window.location.hash.split('/');
console.log(paths, window.location.hash)
if (paths[1] === 'archive'){
   latest = 'md/' + paths[2] + '.md';
   console.log('Updating to archive article.', latest);
}

$.get(latest).then(data => {
  var md = window.markdownit();
  var result = md.render(data);

  $('#markdown').html(result);
});
