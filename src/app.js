import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import About from './components/about';
import Projects from './components/projects';
import Home from './components/home';
import NavLink from './components/navLink';
import './styles/main.scss'; 

const App = React.createClass({
  render() {
    return (
      <div className="header">
        <h1 className="my-name">Ryan Ma</h1>
        <ul className="nav-bar">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/projects" component={Projects}/>
    </Route>
  </Router>
), document.body);
