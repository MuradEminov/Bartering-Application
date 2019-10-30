import React, { Component } from 'react';
import fire from '../src/Firebase/Fire';
import Home from '../src/Home/Home';
import Login from '../src/Login/Login';
import {BrowserRouter } from 'react-router-dom'; 






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


    var divStyleHome = {
      backgroundImage: 'url(' + '../src/images/background-home.jpg' + ')'
    }



    return (<BrowserRouter>
    <div>
      {this.state.user ? <Home /> : <Login />}
      {console.log(this.state.user)}
    </div>
    </BrowserRouter>);
  };
}

export default App;
