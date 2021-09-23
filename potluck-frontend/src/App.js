
import './Nathan.css';
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
          <div className = 'title'>
          <h1>Potluck Planner</h1>
          </div>
          <div className = 'link-container'>
            <Link to='/logout'>Logout</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </div>
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
