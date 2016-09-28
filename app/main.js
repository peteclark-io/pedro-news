'use strict'

import $ from 'jquery';
import md from 'markdown-it';

var latest = 'md/20160927.md';

var paths = window.location.hash.split('/');
console.log(paths, window.location.hash);
if (paths[1] === 'archive') {
    latest = 'md/' + paths[2] + '.md';
    console.log('Updating to archive article.', latest);
}

$.get(latest).then(data => {
    var result = md().render(data);
    $('#markdown').html(result);
});
