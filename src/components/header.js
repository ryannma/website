import React from 'react';
import NavBar from './navBar';

const Header = React.createClass({
  render() {
    return (
      <div className="header">
        <h1 className="name-display">Ryan Ma</h1>
        <NavBar location={this.props.location.pathname}/>
        {this.props.children}
      </div>
    )
  }
});

export default Header;