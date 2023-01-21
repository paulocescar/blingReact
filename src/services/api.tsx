import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/api",
    // headers.common['Authorization'] = `Bearer ${token}`
})

export default api;