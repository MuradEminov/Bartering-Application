import React, { Component } from 'react';
import classes from './Login.module.css';
import Auxiliary from '../hoc/Auxiliary';
import SignIn from '../images/formicons/SignIn.png';
import ReactImage from '../images/icons/react.png'
import ChatkitImage from '../images/icons/chatkit.png';
import AxiosImage from '../images/icons/axios.png';
import CssGrid from '../images/icons/css-grid.png';
import FirebaseImage from '../images/icons/firebase.png';
import ManImage from '../images/formicons/man.png';
import fire from '../Firebase/Fire';
import WatchImage from '../images/formicons/watches.jpg';
import Cars from '../images/formicons/car.jpg';
import Smartphones from '../images/formicons/smartphones.jpg';
import Footer from '../Footer/Footer';
import Barterer from '../images/Barterer Icon/Barterer.png';


class Login extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      //form sign in data
      email: "",
      password: "",

      emailLoginErr: "",
      passwordLoginErr: "",
      //form sign up data: 
      signUpEmail: "",
      signUpEmailRepeat: "",
      signUpPassword: "",
      signUpPasswordRepeat: "",

      signUpEmailError: "",
      signUpEmailRepeatError: "",
      signUpPasswordError: "",
      signUpPasswordRepeatError: ""

    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  validateSignIn = () => {
    let emailLoginErr = "";
    let passwordLoginErr = "";


    if (!this.state.email) {
      emailLoginErr = "Email field is missing.";
    }
    if (!this.state.email.includes('@')) {
      emailLoginErr = "Invalid e-mail";
    }
    if (!this.state.password) {
      passwordLoginErr = "Password field is missing";
    }
    if (emailLoginErr || passwordLoginErr) {
      this.setState({ emailLoginErr, passwordLoginErr });

    }

  }

      // Login method  
  login(e) {
    e.preventDefault();
    this.validateSignIn();

    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).catch((error) => {
      console.log(error);
      let errorMessage = error.message;
      this.setState({ passwordLoginErr: errorMessage });
    });

  }
      //Sign Up if validateSignUp is true method 
  signup(e) {
    e.preventDefault(e);
    this.validateSignUp();
    if (this.validateSignUp) {
      fire.auth().createUserWithEmailAndPassword(this.state.signUpEmail, this.state.signUpPassword)
        .catch((error) => {
          console.log(error.message);
          let errorMessage = error.message;
          this.setState({ signUpPasswordError: errorMessage, signUpPasswordRepeatError: errorMessage });
        })
    }

  }
            //Sign Up validation check method 
  validateSignUp = () => {
    let signUpEmailError = "";
    let signUpEmailRepeatError = "";
    let signUpPasswordError = "";
    let signUpPasswordRepeatError = "";

    if (!this.state.signUpEmail) {
      signUpEmailError = "E-mail is missing";
    }

    if (!this.state.signUpEmail.includes('@')) {
      signUpEmailError = 'Invalid e-mail';
    }
    if (!this.state.signUpEmailRepeat) {
      signUpEmailRepeatError = 'repeat E-mail is missing';
    }
    if (!(this.state.signUpEmail === this.state.signUpEmailRepeat)) {
      signUpEmailRepeatError = "E-mails do not match";
    }
    if (!this.state.signUpPassword) {
      signUpPasswordError = "Password field is missing"
    }
    if (!(this.state.signUpPassword === this.state.signUpPasswordRepeat)) {
      signUpPasswordRepeatError = "Passwords do not match";
    }
    if (signUpEmailError || signUpEmailRepeatError || signUpPasswordError || signUpPasswordRepeatError) {
      this.setState({ signUpEmailError, signUpEmailRepeatError, signUpPasswordError, signUpPasswordRepeatError });
      return false;
    } else {
      return true;
    }

  }


  render() {

    return (<Auxiliary>

      <div className={classes.wrapper}>
        <div className={classes.headerMessage}><img style={{ maxHeight: '53px' }} src={Barterer} />
          <h5>ONLINE BARTERING SYSTEM</h5>
        </div>
        <div className={classes.insideWrapper}>
          <div className={classes.wrapperLeft}>
            <form >
              <h2 style={{ textAlign: 'center', color: "blue", display: "inline" }}>Sign In</h2> <img src={SignIn} />
              <h6 style={{ textAlign: 'center' }}>Already registered ? Then enter your e-mail and password below: </h6>
              <div className={classes.wrapperLeft_content}>
                <label>
                  E-mail<input type="text" name="email" placeholder="email" onChange={this.handleChange} />

                </label>
                <div style={{ color: "red" }}>{this.state.emailLoginErr}</div>
                <label>
                  Password <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
                </label>
                <div style={{ color: "red" }}>{this.state.passwordLoginErr}</div>
                <button type="submit" onClick={this.login} id="signIn">Sign in</button>
              </div>
            </form>

          </div>
          <div className={classes.wrapperRight}>
            <h2 style={{ textAlign: 'center', color: "red" }}>Sign Up</h2>
            <h6 style={{ textAlign: 'center' }}>Not registered yet ? Then, please sign up with your e-mail and password below: </h6>

            <div className={classes.wrapperRight_content}>
              <form >
                <label>
                  E-mail* <input type="text" name="signUpEmail" placeholder="email" value={this.state.signUpEmail} onChange={this.handleChange} />
                </label>
                <div style={{ color: "red" }}>{this.state.signUpEmailError}</div>
                <label>
                  Repeat E-mail* <input type="text" name="signUpEmailRepeat" placeholder="email" value={this.state.signUpEmailRepeat} onChange={this.handleChange} />
                </label>
                <div style={{ color: "red" }}>{this.state.signUpEmailRepeatError}</div>
                <label>
                  Password* <input type="password" name="signUpPassword" placeholder="password, at least 6 characters" value={this.state.signUpPassword} onChange={this.handleChange} />
                </label>
                <div style={{ color: "red" }}>{this.state.signUpPasswordError}</div>
                <label>
                  Repeat Password* <input type="password" name="signUpPasswordRepeat" placeholder="repeat password" value={this.state.signUpPasswordRepeat} onChange={this.handleChange} />
                </label>
                <div style={{ color: "red" }}>{this.state.signUpPasswordRepeatError}</div>
                <button type="submit" id="signUp" onClick={this.signup}>Sign Up</button>
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

      <Footer />
    </Auxiliary>);
  }

}
export default Login;