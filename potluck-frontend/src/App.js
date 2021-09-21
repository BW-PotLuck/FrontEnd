import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          Potluck Planner
          <Link to='/logout'>Logout</Link>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </header>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/logout'>
            <Logout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
