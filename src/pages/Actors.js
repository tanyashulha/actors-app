import React, { Component } from 'react'; 
import List from '../components/List';

class Actors extends Component {
  render() {
    return (
      <div>
        <h2>Hey, look at the actors list!</h2>
        <List></List>
      </div>
    );
  }
}

export default Actors;