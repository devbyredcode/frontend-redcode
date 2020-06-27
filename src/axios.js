import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://admin-redcode.herokuapp.com/'
})

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM SERVER'

export default instance;
// axios.defaults.baseURL = 'https://admin-redcode.herokuapp.com/api/v1';
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';