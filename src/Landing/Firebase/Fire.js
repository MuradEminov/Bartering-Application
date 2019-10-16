import firebase from 'firebase'; 

const config = {
    
        apiKey: "AIzaSyA2HcaKCbrLfiint3YwwUwo3Y2-oYhuY-c",
        authDomain: "barter-app-853e1.firebaseapp.com",
        databaseURL: "https://barter-app-853e1.firebaseio.com",
        projectId: "barter-app-853e1",
        storageBucket: "barter-app-853e1.appspot.com",
        messagingSenderId: "163559476125",
        appId: "1:163559476125:web:927404572a4596370e7d74",
        measurementId: "G-FT9QK3P5G6"
    

};  

const fire = firebase.initializeApp(config); 

export default fire; 