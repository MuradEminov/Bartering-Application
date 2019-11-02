import React from 'react';
import Auxiliary from '../hoc/Auxiliary';
import { storage } from '../Firebase/Fire';
import classes from '../MyItem/MyItem.module.css';



const MyItem = (props) => {
    return (<Auxiliary>
        <div className={classes.MyItem}>
            <h4>Item: {props.title}</h4>
            <img src={props.url || 'https://via.placeholder.com/140x100'} height="100" width="140" />
            <p>Description: {props.description}</p>
            <p>Bartering condition: {props.condition}</p>

        </div>
    </Auxiliary>);
}



export default MyItem; 