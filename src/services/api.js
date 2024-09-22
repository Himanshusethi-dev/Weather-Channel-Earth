import axios from 'axios';


const apiUrl = import.meta.env.VITE_API_URL; 
export const apiKey = import.meta.env.VITE_API_KEY;

export const fetcher = axios.create({
    baseURL: apiUrl,
    headers :{
        "Content-Type": "application/json",
    }
})

