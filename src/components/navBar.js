import React from 'react';
import NavElem from './navElem';
import _ from 'lodash';

// List of navigational elements
let pages = [
  {path: "/", display:"Home", active: false},
  {path: "/about", display:"About", active: false},
  {path: "/projects", display:"Projects", active: false},
  {path: "/contact", display:"Contact", active: false}
]

const NavBar = React.createClass({

  getInitialState: function() {
    return {pages: pages}
  },

  render: function() {
    let self = this;

    return (
      <ul className="nav-bar">
        {this.state.pages.map(function(elem, i) {
          return (
            <NavElem
              className="nav-element"
              path={elem.path}
              display={elem.display}
              key={elem.display}
              location={self.props.location}/>
            );
        })}
      </ul>
    );
  }
});

export default NavBar;

