import axios from "axios";

const api = axios.create({
    baseURL: "https://api-animes-card.herokuapp.com"
})


export default api;