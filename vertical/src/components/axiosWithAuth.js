import Axios from 'axios';

export default function(){
    const token = localStorage.getItem('token');

    return Axios.create({
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`
        }
    });
};