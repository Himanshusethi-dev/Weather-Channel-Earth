import React, { useEffect, useState } from 'react'
import { fetcher } from '../services/api'
import { apiKey } from '../services/api'
const useForecastData = (location,days) => {
    const [data,setData] = useState(null);
    const getForecastData = async()=>{

        const {data} = await fetcher(`forecast.json?key=${apiKey}&q=${location}&days=${days}&aqi=no&alerts=no`)
            console.log(data);
            setData(data)
            return data;
    }
    useEffect(()=>{

        getForecastData()
    },[location,days])
  return (
    {data}
  )
}
// forecast.json?key=4ec26e1870f0427fa3b150224242009&q=New york&days=5&aqi=no&alerts=no
export default useForecastData