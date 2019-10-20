import React, { Component } from 'react';
import Auxiliary from '../hoc/Auxiliary';
import fire from '../Firebase/Fire'; 


class Home extends Component {

   
  
logout(){
  fire.auth().signOut(); 
}  
  
  render() {

    return (<Auxiliary>
        <div>HOME</div>
        <button onClick={this.logout}>Log Out</button>

    </Auxiliary>);
  };

}
export default Home;