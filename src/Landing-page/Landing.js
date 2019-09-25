import React, { Component } from 'react';
import classes from '../../src/Landing-page/Landing.module.css';
import Auxiliary from '../hoc/Auxiliary';

class Landing extends Component {

  render() {

    return (<Auxiliary>

      <div className={classes.wrapper}>

        <div className={classes.headerMessage}><h3>Welcome to the system</h3></div>

        <div className={classes.insideWrapper}>
          <div className={classes.wrapperLeft}>

              <h2>Sign In</h2>
              Name: <input type="text"></input><br />
              Password: <input type="password"></input><br/>

          </div>
          <div className={classes.wrapperRight}></div>
        </div>    

      </div>

    </Auxiliary>);
  }

}
export default Landing;