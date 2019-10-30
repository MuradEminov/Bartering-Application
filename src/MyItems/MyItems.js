import React, { Component } from 'react';
import Auxiliary from '../hoc/Auxiliary';
import {Route , NavLink} from 'react-router-dom';



class MyItems extends Component {

        render() {

        return(
            <Auxiliary>
                <p>My items</p>
            </Auxiliary>
        );     
        } 
    }


export default MyItems; 