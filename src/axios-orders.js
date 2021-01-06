import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-a5607-default-rtdb.firebaseio.com/'
});

export default instance;