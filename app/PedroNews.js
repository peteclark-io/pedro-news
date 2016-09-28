'use strict';

import $ from 'jquery';
import React from 'react';
import PedroNewsArticle from './PedroNewsArticle';
import LastTime from './LastTime';

const PedroNews = React.createClass({

   getInitialState: function(){
      return {latest: this.props.latest, showLink: true};
   },

   updateToLastTime: function(){
      this.setState({latest: this.props.last, showLink: false});
      $('html, body').animate({ scrollTop: 0 }, 'slow');
   },

   render: function() {
      return (
         <div>
            <PedroNewsArticle url={this.state.latest} />
            {this.state.showLink ? <LastTime handleClick={this.updateToLastTime} /> : null}
         </div>
      );
   }
});

export default PedroNews;
