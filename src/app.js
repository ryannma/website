import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import About from './components/about';
import Projects from './components/projects';
import Home from './components/home';
import Contact from './components/contact';
import NavBar from './components/navBar';
import './styles/main.scss'; 

const App = React.createClass({
  render() {
    return (
      <div className="header">
        <h1 className="name-display">Ryan Ma</h1>
        <NavBar location={this.props.location.pathname}/>
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
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>
), document.getElementById('app'));
