import React from 'react'; 
import classes from '../Toolbar/Toolbar.module.css'; 

const toolbar = props => (
    <header className = {classes.toolbar}> 
        <nav className={classes.toolbar__navigation}>
            <div></div>
            <div className={classes.toolbar__logo}><a href="/">THE LOGO</a></div> 
            <div className={classes.toolbar__navigation_items}>
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
            </div> 
            <div><button onClick={props.logout}>Log out</button></div>
        </nav>
    </header>
);

export default toolbar; 