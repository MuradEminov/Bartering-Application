import firebase from 'firebase';   
import 'firebase/storage'; 

const config = {
    
    apiKey: "AIzaSyDQwyaAjTBWkCw1SNeE4j0jl2AkksLQIOw",
    authDomain: "bartering-application.firebaseapp.com",
    databaseURL: "https://bartering-application.firebaseio.com",
    projectId: "bartering-application",
    storageBucket: "bartering-application.appspot.com",
    messagingSenderId: "303321596263",
    appId: "1:303321596263:web:93b92e495a11eaa5786fc2",
    measurementId: "G-ZNRYW8F5L8"
    

};  

const fire = firebase.initializeApp(config);  
const storage = firebase.storage();

export {storage, fire as default}; 
