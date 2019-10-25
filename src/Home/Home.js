import React, { Component } from 'react';
import Auxiliary from '../hoc/Auxiliary';
import fire from '../Firebase/Fire'; 
import Toolbar from '../Toolbar/Toolbar';


class Home extends Component {

   

logout(){
  fire.auth().signOut(); 
}  
  
  render() {

    return (<Auxiliary> 
        <Toolbar logout={this.logout}/> 
        

   
    </Auxiliary>);
  };

}
export default Home;