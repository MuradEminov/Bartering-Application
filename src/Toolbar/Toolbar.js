import React from 'react';
import classes from '../Toolbar/Toolbar.module.css';
import Barterer from '../images/Barterer Icon/Barterer.png'

const toolbar = props => (
    <header className={classes.toolbar}>
        <nav className={classes.toolbar__navigation}>
            <div></div>
            <div className={classes.toolbar__logo}><img src={Barterer}></img></div>
            <div className={classes.spacer}></div>
            <div className={classes.toolbar__navigation_items}>
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
            </div>
            <div><button onClick={props.logout} className={classes.logout__button}>Log out</button></div>
        </nav>
    </header>
);

export default toolbar; 