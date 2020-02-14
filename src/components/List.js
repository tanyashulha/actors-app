import React, { Component } from 'react';


class List extends Component {
  constructor() {
    super();
    this.state = {
      names: []
    }
  };

  componentDidMount() {
    this.getList();
  }

  getList() {
    fetch('https://swapi.co/api/people')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({names: data.results})
      // console.log(data.results)
    })
  }

  deleteName = index => this.setState({
    names: this.state.names.filter(( name, i ) => i !== index)
  });

  addName() {
    let names = [...this.state.names];
    names.push({name: this.newText.value});
    this.setState({names});
  }

  render() {
    const names = this.state.names.map((item, index) => {
      return <li key={index}>
        {item.name}
        <button onClick={this.deleteName.bind(this, index)}>&times;</button>
      </li>
    });
    
    return (
    <div>
      <ul>
      {names}
      </ul>
      <div>
        <label>
          Name:
          <input type='text' name='name' ref={(ip) => {this.newText = ip}}/>
        </label>
        <button  onClick={this.addName.bind(this)}>Add</button>
      </div>
    </div>
    )
  }
};

export default List;