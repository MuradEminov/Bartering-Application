import React, { Component } from 'react';
import './App.css';
import fire from '../src/Firebase/Fire';
import Home from '../src/Home/Home';
import Login from '../src/Login/Login';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: {},
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      
      if (user) {
        this.setState({ user });
        
      } else {
        this.setState({ user: null });
        
      }
    });
  }
  render() {
    return <div> 
    {this.state.user ? <Home/> : <Login /> }  
    {console.log(this.state.user)}
      </div>
};
}

 export default App;
