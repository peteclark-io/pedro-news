'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PedroNews from './PedroNews';

var latest = 'md/20160927.md';
var last = 'md/20160908.md';

ReactDOM.render(
   <PedroNews latest={latest} last={last} />,
   document.getElementById('react')
);
