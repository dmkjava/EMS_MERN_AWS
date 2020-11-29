import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/CreateEmployeeComponent';
import Edit from './components/EditEmployeeComponent';
import Header from './components/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/add' component={Add} />
            <Route exact path='/edit/:id' component={Edit} />
          </Switch>
      </Router>
    );
  }
}
export default App;