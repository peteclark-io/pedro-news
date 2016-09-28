'use strict';

import $ from 'jquery';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const PedroNewsArticle = React.createClass({

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

export default PedroNewsArticle;
