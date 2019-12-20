import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import Login from './components/Login';
import "./styles.scss";

function App() {
  return (
     <Router>
      <div className="App">
        <ul>
          <li>
            <button class="ui primary button"Link to="/login">Login</button>
          </li>
          <br/>
          <li>
            <button class="ui button" Link to="/protected">Bubbles</button>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path="/protected" component={BubblePage} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;