import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './Home/Home'
import About from './About/About'
import CommentApp from './CommentApp'
import index from './Clock/index'


function App() {
  return (
    <Router >
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/CommentApp" component={CommentApp} />
        <Route path="/Clock" component={index} />
      </div>
    </Router>
  );
}

export default App;
