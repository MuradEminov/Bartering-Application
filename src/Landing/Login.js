import React, { Component } from 'react';
import classes from '..';
import Auxiliary from '../hoc/Auxiliary';
import SignIn from '../images/formicons/SignIn.png';
import Home from '../Home/Home';
import ReactImage from '../images/icons/react.png'
import ChatkitImage from '../images/icons/chatkit.png';
import AxiosImage from '../images/icons/axios.png';
import CssGrid from '../images/icons/css-grid.png';
import FirebaseImage from '../images/icons/firebase.png';
import ManImage from '../images/formicons/man.png';
import fire from './Firebase/Fire'; 
import WatchImage from '../images/formicons/watches.jpg'; 
import Cars from '../images/formicons/car.jpg'; 
import Smartphones from '../images/formicons/smartphones.jpg';






class Login extends Component {

   constructor (props){
     super(props); 
     this.state = {

      signInFormValidated : false, 
      signUpFormValidated: false, 
      user: {},
      emailLogin: "",
      passwordLogin: "",
      emailLoginErr: "",
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
   }; 

   


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
      emailErr = 'Invalid e-mail';
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
    let emailLoginErr = "";
    let passwordLoginErr = "";

    if (!this.state.emailLogin) {
      emailLoginErr = "Email field is missing.";
    }
    if (!this.state.emailLogin.includes('@')) {
      emailLoginErr = "Invalid e-mail";
    }
    if (!this.state.passwordLogin) {
      passwordLoginErr = "Password field is missing";
    }
    if (emailLoginErr || passwordLoginErr) {
      this.setState({ emailLoginErr, passwordLoginErr });
    }

  }


  signUpHandler = (event) => {
    const isValid = this.validateSignUp();
    if (isValid) {
      this.setState({signUpFormValidated: true}); 

    }

    event.preventDefault();
    console.log(this.state);
  }


  signInHandler = (event) => {
    const isValid = this.validateSignIn();
    if (isValid) {
      this.setState({signInFormValidated: true}); 

    }

    event.preventDefault();
    console.log(this.state);
      }

  

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
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
                  Email<input type="text" name="emailLogin" placeholder="email" onChange={this.handleChange} />

                </label>
                <div style={{ color: "red" }}>{this.state.emailLoginErr}</div>
                <label>
                  Password <input type="password" name="passwordLogin" placeholder="password" onChange={this.handleChange} />
                </label>
                <div style={{ color: "red" }}>{this.state.passwordLoginErr}</div>
                <button type="submit" id="signIn">Sign in</button>
              </div>
            </form>
            
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
        <div className={classes.advertImages} >
          
             <div> 
            <img src={ManImage} /> 
            </div>
            <div> 
            <img src={WatchImage} />
            </div>
            <div> 
            <img src={Cars} />
            </div>
            <div> 
            <img src={Smartphones} /> 
            </div>

        </div>

      </div>

      <div className={classes.footer}>

        <h5>Developed by Murad Eminov, 2019</h5>
        <img src={ReactImage} />
        <img src={FirebaseImage} />
        <img src={ChatkitImage} />
        <img src={AxiosImage} />
        <img src={CssGrid} />

      </div> 

     

    </Auxiliary>);
  }

}
export default Login;