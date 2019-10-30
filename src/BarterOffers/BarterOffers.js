import React, { Component } from 'react';
import Auxiliary from '../hoc/Auxiliary';
import classes from './BarterOffers.module.css';
import BarterItem from '../BarterItem/BarterItem';

//When back-end ready readey, we will receive items  data from the back-end. For now, we import few barter items images manually
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



        render() {

                //The array of objects with pseudo-data. This resembles the JSON which will be received from the back-end.

                const Data = [{ Image: Image1, Description: "Swatch watch model 91", Bartering_Condition: "Barter with a similar item", Username: "Margarito Hux" },
                { Image: Image2, Description: "SAMSUNG smart watch ", Bartering_Condition: "Barter with a similar item with extra payment", Username: "Reynalda Cail" },
                { Image: Image3, Description: "Smartphone IPhone 5 ", Bartering_Condition: "Barter with SAMSUNG smartwatch",  Username: "Joette Gertz" },
                { Image: Image4, Description: "Laptop ASUS S510UF ", Bartering_Condition: "Barter with a watch Rolex",  Username: "Alex Vittetoe" },
                { Image: Image5, Description: "Stool from IKEA ", Bartering_Condition: "Barter with a book React JS or similar",  Username: "Kary Girouard" },
                { Image: Image6, Description: "Baby cart, black colour", Bartering_Condition: "Barter with a book React JS or similar",  Username: "Brain List" },
                { Image: Image7, Description: "Book WAR AND PEACE  ", Bartering_Condition: "Barter with kitchenware set",  Username: "Carman Hsieh" },
                { Image: Image8, Description: "Bycicle Moustache ", Bartering_Condition: "Barter with ray-ban sunglasses",  Username: "Meggan Valderrama" },
                { Image: Image9, Description: "Printer SAMSUNG SGX", Bartering_Condition: "Barter with SAMSUNG GALAXY S10",  Username: "Lala Gloria" },
                { Image: Image10, Description: "Motorcycle SUZUKI", Bartering_Condition: "Barter with AUDI CAR",  Username: "Eusebia Linda" }
                ];

                let result = Data.map(function (item, index) {
                        return (<BarterItem image={item.Image} description={item.Description} condition={item.Bartering_Condition} by={item.Username}/>

                        )
                })


                return (<Auxiliary>

                        <div className={classes.BarterOffers__container}>
                                {result}
                        </div>
                </Auxiliary>);
        }
}

export default BarterOffers; 