import React, { Component } from 'react';
import Auxiliary from '../hoc/Auxiliary';
import classes from '../MyItems/MyItems.module.css';
import { storage } from '../Firebase/Fire';
import axios from 'axios';


class MyItems extends Component {


    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '', 
            uploadStatus: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleChange = e => {
        if (e.target.files[0]) { 

            const image = e.target.files[0];
            this.setState(() => ({ image , uploadStatus: true }), () => console.log(this.state.image.name));

        }
    }

    handleUpload = () => {  
        if (!this.state.uploadStatus){
            alert("No item image was uploaded."); 
            return null; 
        }
        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', (snapshot) => {
                // demonstrate the image upload progress
        },
            (error) => { 
                // error function 
                console.log(error);
            },
            () => { 
                //complete function  
                storage.ref(`images`).child(image.name).getDownloadURL().then((url) => {
                    console.log(url); 
                    this.setState({url});
                })

            });
    }

    render() {

        return (
            <Auxiliary>
                <div className={classes.MyItems}>
                    <div className={classes.container}>
                        <div className={classes.MyItems__left__container}>
                            <div className={classes.Items__Upload}> <p>Upload your barter item picture below:</p><br />
                                <input type="file" onChange={this.handleChange} />
                            </div>
                            <div className={classes.Items__Info}>
                                <div className={classes.Items_Description}><p>Describe your item:</p><textarea rows="15" cols="30" ></textarea></div>
                                <div className={classes.Items_Bartering__Condition}><p>Bartering condition:</p><br />
                                    <div className={classes.Items__Bartering_Condition_Options}>

                                        <input type="radio" name="with-similar" />With a similar item <br />
                                        <input type="radio" name="with-similar-with-extra" />With a similar item with extra payment <br />
                                        <input type="radio" name="with" />With <input style={{ height: "11px", maxWidth: '240px' }} type="text" name="special-item" placeholder="e.g. Rolex Watch model 16233" /> <br />
                                        <input type="radio" name="as-gift" />I give this item as gift! <br />
                                        <input type="radio" name="as-gift" />I give this item as gift to<input style={{ height: "11px", maxWidth: '120px' }} type="text" placeholder="e.g. students" /> <br />
                                    </div>
                                </div>
                            </div>
                            <div className={classes.Items_Gallery}><button onClick={this.handleUpload}>+ADD</button></div>
                        </div>
                        <div className={classes.MyItems__right__container}>
                            <div className={classes.MyItems__right__container__header}><p>My items</p></div> 
                                    <div className={classes.MyItems__right__container__block}> 
                                        <div className={classes.MyItems__right__container__block__item}>sasa <br /> 
                                            <img src={this.state.url || 'https://via.placeholder.com/140x100'}  height="100" width="140" />
                                        </div>

                            
                            </div>
                        </div>
                    </div>
                </div>
            </Auxiliary>
        );
    }
}


export default MyItems; 