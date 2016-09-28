'use strict'

import $ from 'jquery';
import md from 'markdown-it';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

var latest = 'md/20160927.md';
var last = 'md/20160908.md';

var PedroNews = React.createClass({
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

var PedroNewsArticle = React.createClass({
   update: function(){
      $.get(this.props.url).then(data => {
         this.setState({markdown: data});
      });
   },
   getInitialState: function(){
      return {markdown: ''};
   },
   componentDidMount: function() {
      this.update();
   },
   componentDidUpdate: function(){
      this.update();
   },
   render: function() {
      return (
         <ReactMarkdown source={this.state.markdown} />
      );
   }
});

var LastTime = React.createClass({
   render: function() {
      var linkStyle = {
         cursor: 'pointer'
      };
      return (
         <a style={linkStyle} onClick={this.props.handleClick}>Last time on Pedro News!</a>
      );
   }
});

ReactDOM.render(
   <PedroNews latest={latest} last={last} />,
   document.getElementById('markdown')
);
