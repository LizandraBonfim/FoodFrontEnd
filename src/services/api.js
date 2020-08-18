import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://werter-meat-api.herokuapp.com/'
});

