import React from 'react';
import { Link, browserHistory, Router } from 'react-router';
import classNames from 'classnames';

const NavElem = React.createClass({

  handleClick: function(path) {
    browserHistory.push(path);
  },

  render: function() {
    let path = this.props.path;
    let location = this.props.location;
    let navElemClass = classNames(
      "nav-element",
      {active: location === path ? true : false});

    return (
      <span
        className={navElemClass}
        onClick={this.handleClick.bind(this, path)}
        >
        {this.props.display}
      </span>
    );
  }
});


export default NavElem;