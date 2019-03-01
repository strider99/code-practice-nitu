import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserDetail from './components/UserDetail';

class App extends Component {


  state = {
    name: 'Nitu',
    address: 'Delhi'
  }

  nameChangeHandler = (e) => {
    console.log(e.target.value);
    this.setState({
      name: e.target.value
    })
  }

  homeChangeHandler = (e) => {
    this.setState({
      address: e.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <UserDetail
         firstname={this.state.name}
         home={this.state.address}
         nameChangeHandler={this.nameChangeHandler}
         homeChangeHandler={this.homeChangeHandler}

        />
      </div>
    );
  }
}

export default App;
