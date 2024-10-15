import {useEffect, useState} from 'react'
import { fetcher } from '../services/api'
import { apiKey } from '../services/api'
import {useQuery} from '@tanstack/react-query'
const useCurrentWeatherData = (location) => {
  const getCurrentWeatherData = async ()=>{
    const  {data} = await fetcher.get(`/current.json?key=${apiKey}&q=${location}&aqi=no`)
    console.log("cwds",data)
    return data;
    }
    // useEffect(()=>{

    //   console.log("we are called",location);
      
    // })
 const query =  useQuery({
  queryKey: ['currentWeather',location], 
  queryFn: getCurrentWeatherData,
  
})
 console.log("query",query)
  return (
    {currentWeather:query.data,loading:query.isPending,error:query.isError}
  )
}

export default useCurrentWeatherData