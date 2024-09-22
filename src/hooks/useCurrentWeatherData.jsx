import {useEffect, useState} from 'react'
import { fetcher } from '../services/api'
import { apiKey } from '../services/api'
const useCurrentWeatherData = (location) => {
    const [currentWeather,setCurrentWeather] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const getCurrentWeatherData = async ()=>{
      setLoading(true);
      setError(null); 
      try {
        const  {data} = await fetcher.get(`/current.json?key=${apiKey}&q=${location}&aqi=no`)
        if (!data) {
          throw new Error(`error`); 
        }
        setCurrentWeather(data)
         console.log(data)    
      } catch (err) {
        setError(err.message); 
      }finally {
        setLoading(false); 
      }
       
      }
    
      useEffect(()=>{
       getCurrentWeatherData()
      },[location])
  return (
    {currentWeather,loading,error}
  )
}

export default useCurrentWeatherData