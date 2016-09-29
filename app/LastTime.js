'use strict';

import React from 'react';
import styles from './styles.css';

const LastTime = React.createClass({
   render: function() {
      return (
         <div className={styles.container}>
            <a className={styles.link} onClick={this.props.handleClick}>Last time on Pedro News!</a>
         </div>
      );
   }
});

export default LastTime;
