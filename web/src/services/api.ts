import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5051'
})

export default api;