import React, { Component } from 'react';
import Auxiliary from '../hoc/Auxiliary';
import fire from '../Firebase/Fire';
import Toolbar from '../Toolbar/Toolbar';
import classes from '../Home/Home.module.css';


class Home extends Component {

  logout() {
    fire.auth().signOut();
  }

  render() {

    return (
      <Auxiliary>
        <Toolbar logout={this.logout} />
        <main style={{ marginTop: '64px' }}>
          <div className={classes.left__sidebar}>
                <div className={classes.left__sidebar__content}> 
                    <ul>
                       <li>MY ITEMS</li>
                       <li>MY DEALS</li>
                       <li>MY WISHLIST</li>
                    </ul>
                </div>
                </div> 
          <div className={classes.Content}></div>
        </main>
      </Auxiliary>
    );
  };

}
export default Home;