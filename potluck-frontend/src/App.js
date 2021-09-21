import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout'
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';

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
          <Route path='/login'>
            <Register />
          </Route>
          {/* <PrivateRoute exact path='' component={} /> JUST HERE FOR WHEN WE NEED IT */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
