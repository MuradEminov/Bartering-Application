import React from 'react';
import Auxiliary from '../hoc/Auxiliary';
import ReactImage from '../images/icons/react.png'
import ChatkitImage from '../images/icons/chatkit.png';
import AxiosImage from '../images/icons/axios.png';
import FirebaseImage from '../images/icons/firebase.png';
import CssGrid from '../images/icons/css-grid.png';
import classes from '../Login/Login.module.css';


const footer = (props) => (

    <Auxiliary>
        <div className={classes.footer}>
            <h5>Developed by Murad Eminov, 2019</h5>
            <img src={ReactImage} />
            <img src={FirebaseImage} />
            <img src={ChatkitImage} />
            <img src={AxiosImage} />
            <img src={CssGrid} />
        </div>
    </Auxiliary>
     
);




export default footer;