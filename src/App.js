import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Actors from './pages/Actors';
 
class App extends Component {
   render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/Actors'}>Actors</Link></li>
          </ul>
          <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Actors' component={Actors} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
