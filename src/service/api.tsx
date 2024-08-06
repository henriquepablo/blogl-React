import axios from "axios";

const api = axios.create({
    baseURL: 'http:localhost/blog/'
});

export default api;