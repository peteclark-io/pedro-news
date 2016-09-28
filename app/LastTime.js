'use strict';

import React from 'react';

const divStyle = {
   marginTop: '40px'
};

const linkStyle = {
   cursor: 'pointer'
};

const LastTime = React.createClass({
   render: function() {
      return (
         <div style={divStyle}>
            <a style={linkStyle} onClick={this.props.handleClick}>Last time on Pedro News!</a>
         </div>
      );
   }
});

export default LastTime;
