import React, { Component } from 'react';
import classes from '../Landing/Landing.module.css';
import Auxiliary from '../hoc/Auxiliary';
import SignIn from '../images/formicons/SignIn.png';
import { throwStatement } from '@babel/types';
import ReactImage from '../images/icons/react.png'
import ChatkitImage from '../images/icons/chatkit.png';
import Axios from '../images/icons/axios.png';
import CssGrid from '../images/icons/css-grid.png';
import FirebaseImage from '../images/icons/firebase.png';
import ManImage from '../images/formicons/man.png';
import Fire from './Firebase/Fire';
import fire from './Firebase/Fire';



const initialState = {

  user: {},  
  nameLogin: "",
  passwordLogin: "", 
  nameLoginErr: "", 
  passwordLoginErr: "",
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
  nameErr: "",
  emailErr: "",
  passwordErr: "",
  error: false
};


class Landing extends Component {

  state = initialState;


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  validateSignUp = () => {
    let nameErr = "";
    let emailErr = "";
    let passwordErr = "";

    if (!this.state.name) {
      nameErr = "Username field is missing.";
    }

    if (!this.state.email.includes('@')) {
      emailErr = 'Invalid email';
    }

    if (!this.state.password) {
      passwordErr = "Password field is missing"
    }
    if (!(this.state.password === this.state.repeatPassword)) {
      passwordErr = "Passwords do not match";
    }


    if (emailErr || nameErr || passwordErr) {
      this.setState({ emailErr, nameErr, passwordErr });
      return false;
    } else {
      return true;
    }

  }

  validateSignIn = () => {
    let nameLoginErr = "";
    let passwordLoginErr = "";

    if (!this.state.nameLogin){
      nameLoginErr = "Username field is missing."; 
    } 
    if (!this.state.password){
      passwordLoginErr = "Password field is missing"; 
    } 
     if (nameLoginErr || passwordLoginErr){
       this.setState({nameLoginErr, passwordLoginErr}); 
     }

    

  }



  signUpHandler = (event) => {
    const isValid = this.validateSignUp();
    if (isValid) {
      console.log(this.state);
      // this.setState(initialState);
    }

    event.preventDefault();
    console.log(this.state);
  }


  signInHandler = (event) => {
    const isValid = this.validateSignIn();
    if (isValid) {
      console.log(this.state); 
        // this.setState(initialState);
    }

    event.preventDefault();
    console.log(this.state);
  } 

   authListener =() =>{
     fire.auth().onAuthStateChanged((user) =>{
       if(user){
         this.setState({user}); 
            } else {
            this.setState({user: null}); 
                }
     });
   }


   componentDidMount(){
     
   }





  render() {

    return (<Auxiliary>
     
      <div className={classes.wrapper}>
        <div className={classes.headerMessage}><h3>Welcome to the online-bartering system</h3></div>
        <div className={classes.insideWrapper}>
          <div className={classes.wrapperLeft}>
            <form onSubmit={this.signInHandler}>
              <h2 style={{ textAlign: 'center', color: "blue", display: "inline" }}>Sign In</h2> <img src={SignIn} />
              <h6 style={{ textAlign: 'center' }}>Already registered ? Then enter username and password below: </h6>
              <div className={classes.wrapperLeft_content}>

                <label>
                  Username <input type="text" name="nameLogin" placeholder="username" onChange={this.handleChange} />
                  
                </label> 
                <div style={{ color: "red" }}>{this.state.nameLoginErr}</div>
                <label>
                  Password <input type="password" name="passwordLogin" placeholder="password" onChange={this.handleChange} /> 
                    </label>
                    <div style={{ color: "red" }}>{this.state.passwordLoginErr}</div>
                <button type="submit" id="signIn">Sign in</button>
              </div>
            </form>
            <img style={{ maxHeight: "27rem", left: "15px", position: "absolute" }} src={ManImage} />
          </div>
          <div className={classes.wrapperRight}>
            <h2 style={{ textAlign: 'center', color: "red" }}>Sign Up</h2>
            <h6 style={{ textAlign: 'center' }}>Not registered yet ? Then, please provide your user information below: </h6>

            <div className={classes.wrapperRight_content}>
              <form onSubmit={this.signUpHandler}>
                <label>
                  Username* <input type="text" name="name" placeholder="username" value={this.state.name} onChange={this.handleChange} />
                </label>
                <div style={{ color: 'red' }}>{this.state.nameErr}</div>
                <label>
                  Password* <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                </label>
                <div style={{ color: "red" }}>{this.state.passwordErr}</div>
                <label>
                  Repeat Password* <input type="password" name="repeatPassword" placeholder="repeat password" value={this.state.repeatPassword} onChange={this.handleChange} />
                </label>
                <div style={{ color: "red" }}>{this.state.passwordErr}</div>
                <label>
                  E-mail* <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
                </label>
                <div style={{ color: "red" }}>{this.state.emailErr}</div>
                <button type="submit" id="signUp">Sign Up</button>
              </form>

            </div>


          </div>
        </div>

      </div>

      <div className={classes.footer}>
      
        <h5>Developed by Murad Eminov, 2019</h5>
        <img src={ReactImage} />
        <img src={FirebaseImage} />
        <img src={ChatkitImage} />
        <img src={Axios} />
        <img src={CssGrid} />
     
      </div>

    </Auxiliary>);
  }

}
export default Landing;