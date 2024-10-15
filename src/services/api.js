import axios from 'axios';


const apiUrl = import.meta.env.VITE_API_URL; 
const productsBase = import.meta.env.VITE_API_URL_PRODUCTS;
export const apiKey = import.meta.env.VITE_API_KEY;

export const fetcher = axios.create({
    baseURL: apiUrl,
    headers :{
        "Content-Type": "application/json",
    }
})
// fetch('https://dummyjson.com/products?limit=10&skip=0&select=title,price')
// .then(res => res.json())
// .then(console.log);

export const productsAPI = axios.create({
    baseURL:productsBase,
    headers :{
        "Content-Type": "application/json",
    }
})


export const  deleteProducts = async (id)=>{
   const {data} = await productsAPI.delete(`/${id}`);
   return data;

}

