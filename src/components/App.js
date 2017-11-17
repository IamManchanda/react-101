import React, { Component } from 'react';
import AppPerson from './person/AppPerson';

class App extends Component {
  state = {
    persons: [
      { name: 'Narendra Modi', age: 67, country: 'India', designation: '16th Prime Minister' },
    ],
    otherState: 'Some other value',
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 67, country: 'India', designation: '16th Prime Minister' },
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 67, country: 'India', designation: '16th Prime Minister' },
      ]
    }); 
  }

  render() {
    return (
      <div className="app">
        <AppPerson name={ this.state.persons[0].name }
                   age={ this.state.persons[0].age }
                   country={ this.state.persons[0].country }
                   click={ this.switchNameHandler.bind(this, 'Modi') }
                   changed={ this.nameChangedHandler }>{ this.state.persons[0].designation }</AppPerson>        
      </div>
    );
  }
}

export default App;
