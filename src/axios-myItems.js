import axios from 'axios'; 

const instance = axios.create(
    {
        baseURL: 'https://bartering-application.firebaseio.com/'
    } );

    export default instance; 