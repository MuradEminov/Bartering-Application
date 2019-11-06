import React, { Component } from 'react';
import Auxiliary from '../hoc/Auxiliary';
import classes from '../MyItems/MyItems.module.css';
import { storage } from '../Firebase/Fire';
import MyItem from '../MyItem/MyItem';
import instance from '../axios-myItems';
import { database } from 'firebase';



class MyItems extends Component {


    constructor(props) {
        super(props);
        // State:
        const initial_state = {
            image: null,
            url: '',
            uploadStatus: false,
            itemTitle: '',
            itemDescription: '',
            barteringCondition: '',
            addedItem: [],


        };
        this.state = initial_state;

        //Binded handler methods: 
        
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this); 
        
        // Input field Refs:  
        this.inputRef = React.createRef(); // Ref for the input field id "special-item"
        this.inputRef2 = React.createRef(); // Ref for the input field id "only-for"
    }


    componentDidMount() {

        instance.get('https://bartering-application.firebaseio.com/myitems.json')
            .then(response => {
                var obj = Object.values(response.data);
                this.setState({ addedItem: obj });


            })
            .catch(error => {
                console.log(error);
            });

            console.log("Input ref", this.inputRef);
    }


    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image, uploadStatus: true }), () => console.log(this.state.image.name));

        }
    }

    handleUpload = () => { 
            
        if (!this.state.uploadStatus) {
            alert("No item image was uploaded.");
            return null;
        }
        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', (snapshot) => {
            // demonstrate the image upload progress --not using
        },
            (error) => {
                // error function 
                console.log(error);
            },
            () => {
                //complete function  
                storage.ref(`images`).child(image.name).getDownloadURL().then((url) => {
                    console.log(url);
                    alert("uploaded!");
                    this.setState({ url });
                    // When uploadded image url is received, collect all item data into myNewItem object and post this record to Firebase Database

                    const myNewItem = {
                        Title: this.state.itemTitle,
                        Description: this.state.itemDescription,
                        URL: this.state.url,
                        Condition: this.state.barteringCondition
                    };


                    instance.post('/myitems.json', myNewItem)
                        .then(response => { window.location.reload(); })
                        .then(error => {
                            console.log(error);
                        })

                })

            });


    }

    titleChangeHandler = event => {
        this.setState({ itemTitle: event.target.value });

    }

    descriptionChangeHandler = event => {
        this.setState({ itemDescription: event.target.value });
    }

    handleRadioToggle = (event) => {
        if (event.target.id === "with-similar") { 
            this.inputRef.current.disabled = true; 
            this.inputRef2.current.disabled = true; 
            this.setState({ barteringCondition: event.target.value });
        } 
        if(event.target.id === "with-similar-with-extra"){
            this.inputRef.current.disabled = true; 
            this.inputRef2.current.disabled = true; 
            this.setState({ barteringCondition: event.target.value });
        } 
        if(event.target.id === "with"){
            this.inputRef.current.disabled = false;
            this.inputRef2.current.disabled = true; 
                                                 
        }
        if(event.target.id == "special-item"){
            
            this.setState({barteringCondition: "With "+ event.target.value});

        } 
        if (event.target.id == "as-gift"){
            this.inputRef.current.disabled = true; 
            this.inputRef2.current.disabled = true; 
            this.setState({ barteringCondition: event.target.value });
        } 

        if(event.target.id == "as-gift-for"){
            this.inputRef.current.disabled = true; 
            this.inputRef2.current.disabled = false;
        } 
        if(event.target.id == "only-for"){
            this.setState({barteringCondition: "I give this item as gift to " +  event.target.value});
        }


    }

    render() {

        const items = this.state.addedItem.map(item => {
            return (<MyItem title={item.Title} description={item.Description} condition={item.Condition} url={item.URL} />);
        })

        return (
            <Auxiliary>
                <div className={classes.MyItems}>
                    <div className={classes.container}>
                        <div className={classes.MyItems__left__container}>
                            <div className={classes.Items__Upload}> <p>Upload your barter item picture below:</p><br />
                                <input type="file" onChange={this.handleChange} /><br />
                                <p style={{ padding: '0px', margin: '10px' }}>Title of the item:</p><input type="text" onChange={this.titleChangeHandler} maxLength='22' />
                            </div>
                            <div className={classes.Items__Info}>
                                <div className={classes.Items_Description}><p>Describe your item:</p><textarea rows="15" cols="30" onChange={this.descriptionChangeHandler} maxLength="95"></textarea></div>
                                <div className={classes.Items_Bartering__Condition}><p>Bartering condition:</p><br />
                                    <div className={classes.Items__Bartering_Condition_Options}>
                                        <fieldset id="barter-options">
                                            <input type="radio" name="option" id="with-similar" onChange={this.handleRadioToggle} value="With a similar item" />With a similar item <br />
                                            <input type="radio" name="option" id="with-similar-with-extra" onChange={this.handleRadioToggle} value="With a similar item with extra payment" />With a similar item with extra payment <br />
                                            <input type="radio" name="option" id="with" onChange={this.handleRadioToggle} />With <input style={{ height: "11px", maxWidth: '240px' }} type="text" id="special-item" placeholder="e.g. Rolex Watch model 16233" disabled={true} ref={this.inputRef} onChange={this.handleRadioToggle}/> <br />
                                            <input type="radio" name="option" id="as-gift" onChange={this.handleRadioToggle} value="I give this item as gift!" />I give this item as gift! <br />
                                            <input type="radio" name="option" id="as-gift-for" onChange={this.handleRadioToggle} />I give this item as gift to<input style={{ height: "11px", maxWidth: '120px' }} id="only-for" type="text" placeholder="e.g. students" disabled={true} ref={this.inputRef2} onChange={this.handleRadioToggle}/> <br />
                                        </fieldset>
                                        <div className={classes.Items_addButton}><button onClick={this.handleUpload}>+ADD</button></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={classes.MyItems__right__container}>
                            <div className={classes.MyItems__right__container__header}><p>My items</p></div>
                            <div className={classes.MyItems__right__container__block}>
                                {items}
                            </div>
                        </div>
                    </div>
                </div>
            </Auxiliary>
        );
    }
}


export default MyItems; 