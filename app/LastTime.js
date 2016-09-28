'use strict';

import React from 'react';

const LastTime = React.createClass({
   render: function() {
      var linkStyle = {
         cursor: 'pointer'
      };
      return (
         <a style={linkStyle} onClick={this.props.handleClick}>Last time on Pedro News!</a>
      );
   }
});

export default LastTime;
