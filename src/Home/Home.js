import React, { Component } from 'react';
import Auxiliary from '../hoc/Auxiliary';
import fire from '../Firebase/Fire';
import Toolbar from '../Toolbar/Toolbar';
import classes from '../Home/Home.module.css';
import BarterOffers from '../BarterOffers/BarterOffers';
import MyItems from '../MyItems/MyItems';
import Hero from '../Hero/Hero';
import { Route, NavLink } from 'react-router-dom';

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
                <li><NavLink exact to="/">BARTER OFFERS</NavLink></li>
                <li><NavLink exact to="/my-items">MY ITEMS</NavLink></li>
                <li>MY DEALS</li>
                <li>MY WISHLIST</li>
              </ul>
            </div>
          </div>
          <div className={classes.Content}>
            
            <Route path="/" exact component={BarterOffers} />
            <Route path="/my-items" exact component={MyItems} />
            {console.log(this.props)}
          </div>
        </main>

      </Auxiliary>
    );
  };

}
export default Home;