import React, { Component } from 'react';
import Auxiliary from '../hoc/Auxiliary';
import classes from './BarterOffers.module.css';
import BarterItem from '../BarterItem/BarterItem';
import instance from '../axios-myItems';
import MyItem from '../MyItem/MyItem';

//When back-end ready , we will receive items  data from the back-end. For now, we import few barter items images manually, then add out uploaded items 
import Image1 from '../images/BarterOfferImages/img-1.jpg';
import Image2 from '../images/BarterOfferImages/img-2.jpg';
import Image3 from '../images/BarterOfferImages/img-3.jpg';
import Image4 from '../images/BarterOfferImages/img-4.jpg';
import Image5 from '../images/BarterOfferImages/img-5.jpg';
import Image6 from '../images/BarterOfferImages/img-6.jpg';
import Image7 from '../images/BarterOfferImages/img-7.jpg';
import Image8 from '../images/BarterOfferImages/img-8.jpg';
import Image9 from '../images/BarterOfferImages/img-9.jpg';
import Image10 from '../images/BarterOfferImages/img-10.jpg';




class BarterOffers extends Component {

        constructor(props) {
                super(props);
                this.state = {
                        myOwnItem: []
                }
        };

        componentDidMount() {

                instance.get('https://bartering-application.firebaseio.com/myitems.json')
                        .then(response => {
                                var obj = Object.values(response.data);
                                this.setState({ myOwnItem: obj });



                        })
                        .catch(error => {
                                console.log(error);
                        });
        }

        render() {

                const myItems = this.state.myOwnItem.map(item => {
                        return (<MyItem url={item.URL} title={item.Title} description={item.Description} condition={item.Condition} />);
                });

                //The array of objects with pseudo-data. This resembles the JSON which will be received from the back-end.

                const Data = [{ Image: Image1, Item_name: "Swatch watch model 91231", Description: " Almost new Switzerland-made watch, water-proof, stainless steal", Bartering_Condition: "Barter with a similar item", Username: "Margarito Hux" },
                { Image: Image2, Item_name: "SMART watch SAMSUNG", Description: "Can be integrated with any smartphone, used, 3-month old ", Bartering_Condition: "Barter with a similar item with extra payment", Username: "Reynalda Cail" },
                { Image: Image3, Item_name: "IPhone 5", Description: "Iphone 5 phone, white color, 8mg-camera, unlocked SIM ", Bartering_Condition: "Barter with SAMSUNG smartwatch", Username: "Joette Gertz" },
                { Image: Image4, Item_name: "Laptop ASUS S510UF ", Description: "Laptop ASUS S510UF, almost new, 16GB RAM, NVIDEA-Geforce 9000GT, 500GB Hard-drive ", Bartering_Condition: "Barter with a watch Rolex", Username: "Alex Vittetoe" },
                { Image: Image5, Item_name: "IKEA stool model 14AA43 ", Description: "Stool from IKEA, white color, new ", Bartering_Condition: "Barter with a book React JS or similar", Username: "Kary Girouard" },
                { Image: Image6, Item_name: "Baby cart ", Description: "Baby cart, black colour, used but in good shape", Bartering_Condition: "Barter with a book React JS or similar", Username: "Brain List" },
                { Image: Image7, Item_name: "Book War and Peace", Description: "Book WAR AND PEACE by Leo Tolstoy, in hard cover  ", Bartering_Condition: "Barter with kitchenware set", Username: "Carman Hsieh" },
                { Image: Image8, Item_name: "City Bicycle", Description: "Bicycle Moustache, a city bike, in excellent shape, used for 2month", Bartering_Condition: "Barter with ray-ban sunglasses", Username: "Meggan Valderrama" },
                { Image: Image9, Item_name: "Printer Samsung SG-3200", Description: "Cartridge-printer, 3-in-1 series with scanner", Bartering_Condition: "Barter with SAMSUNG GALAXY S10", Username: "Lala Gloria" },
                { Image: Image10, Item_name: "SUZUKI Motorcycle", Description: "Four stroke,SOHC, 4 valves", Bartering_Condition: "Barter with AUDI CAR", Username: "Eusebia Linda" }
                ];

                let result = Data.map(function (item, index) {
                        return (<BarterItem image={item.Image} name={item.Item_name} description={item.Description} condition={item.Bartering_Condition} by={item.Username} />

                        )
                })


                return (<Auxiliary>

                        <div className={classes.BarterOffers__container}>
                                {result}
                                {myItems}

                        </div>
                </Auxiliary>);
        }
}

export default BarterOffers; 