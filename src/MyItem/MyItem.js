import React from 'react';
import Auxiliary from '../hoc/Auxiliary';
import { storage } from '../Firebase/Fire';
import classes from '../BarterItem/BarterItem.module.css';
 



const MyItem = (props) => {



    return (<Auxiliary>
                                {/* here it is implement the styling classes of BarterItem,  */}
        <div className={classes.barterItem}>
            <div>
                <img src={props.url || 'https://via.placeholder.com/140x100'} height="240" width="150" alt='my item' />
                <div className={classes.itemdescription__myItem}>
                    <div className={classes.description__text}>
                        <p style={{ textAlign: 'start' }}><span style={{ color: 'blue' }}>Item:</span> {props.title} </p>
                        <p style={{ textAlign: 'start' }}><span style={{ color: 'blue' }}>Description:</span> {props.description} </p>
                        <p style={{ textAlign: 'start' }}><span style={{ color: 'blue' }}>Bartering condition:</span> {props.condition}</p>
                        <p style={{ textAlign: 'start' }}><span style={{ color: 'blue' }}>User:</span><span style={{backgroundColor:'#66FF66', color:'white', minWidth:'22px'}}>You</span> </p>
                    </div> 
                    
                </div> 
                <div className={classes.deleteButton}> 
                    <button>Remove item</button>
                </div>
                
            </div>
        </div>



    </Auxiliary>);
}



export default MyItem; 