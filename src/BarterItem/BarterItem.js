import React from 'react';
import classes from './BarterItem.module.css';
import Auxiliary from '../hoc/Auxiliary';



const barterItem = (props) => {
    return (
        <Auxiliary>
            <div className={classes.barterItem}>
                <div>
                    <img src={props.image} />
                    <div className={classes.itemdescription}>
                        <div className={classes.description__text}>
                            <p style={{ textAlign: 'start'}}><span style={{ color: 'blue' }}>Item:</span> {props.name} </p>
                            <p style={{ textAlign: 'start'}}><span style={{ color: 'blue' }}>Description:</span> {props.description} </p>
                            <p style={{ textAlign: 'start' }}><span style={{ color: 'blue' }}>Bartering condition:</span> {props.condition}</p>
                            <p style={{ textAlign: 'start' }}><span style={{ color: 'blue' }}>User:</span> {props.by}</p>
                        </div>
                        <div className={classes.description__button}> <button>BARTER</button></div>
                    </div>

                </div>
            </div>
        </Auxiliary>
    );
};

export default barterItem; 