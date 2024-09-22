import React, { useEffect, useState } from 'react'
import { fetcher } from '../services/api'
import { apiKey } from '../services/api'
const usePredictiveResults = (searchTerm) => {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");
    const getPredictiveResults = async ()=>{
      if(searchTerm){
        setLoading(true)
        try {
          const {data}  = await fetcher(`search.json?key=${apiKey}&q=${searchTerm}`)
          console.log("search",data)
          setLoading(false)
          setData(data)
        } catch (error) {
          console.log("error",error)
          setLoading(false);
          setError("No results found");
        }
       
      }else{
        setData("")
      }
   
    }
    useEffect(()=>{
        getPredictiveResults()
    },[searchTerm])
  return (
   {
      data,
      loading,
      error
   }
  )
}

export default usePredictiveResults