import Axios from 'axios';

export default function(){
    const token = localStorage.getItem('token');
    //const Axios = require('axios');
    return Axios.create({
        headers:{
            get:{'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`}
        }
    });
};