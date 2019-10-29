import React, { Component } from 'react';
import Auxiliary from '../hoc/Auxiliary';
import fire from '../Firebase/Fire';
import Toolbar from '../Toolbar/Toolbar';
import classes from '../Home/Home.module.css';
import BarterOffers from '../BarterOffers/BarterOffers';
import Hero from '../Hero/Hero';

class Home extends Component {

  state = {
    showOffers: true,
    showMyItems: false,
    showMyDeals: false,
    showMyWishlist: false
  };


  logout() {
    fire.auth().signOut();
  }

  render() {

    return (
      <Auxiliary>
        <Toolbar logout={this.logout} />
        <Hero />
        <main>
          <div className={classes.left__sidebar}>
            <div className={classes.left__sidebar__content}>
              <ul>
                <li>BARTER OFFERS</li>
                <li>MY ITEMS</li>
                <li>MY DEALS</li>
                <li>MY WISHLIST</li>
              </ul>
            </div>
          </div>
          <div className={classes.Content}>
            <BarterOffers />
          </div>
        </main>
      </Auxiliary>
    );
  };

}
export default Home;