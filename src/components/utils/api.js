import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000', // Replace with actual base URL
});

export default api;
