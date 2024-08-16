import axios from "axios";

const api = axios.create({
    headers: { 'Cache-Control': 'no-cache', },
    baseURL: 'https://fakestoreapi.com',
})

export default api;