import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Home from './components/home';
import Contact from './components/contact';
import './styles/main.scss'; 


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Header}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>
), document.getElementById('app'));
