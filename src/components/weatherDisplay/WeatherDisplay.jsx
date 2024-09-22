import React, { useEffect,useState } from 'react'
import { fetcher } from '../../services/api'
import { apiKey } from '../../services/api'
import './style.css'
import WeatherInfo from '../weatherInfo/WeatherInfo'
import useCurrentWeatherData from '../../hooks/useCurrentWeatherData'
const WeatherDisplay = ({location,unit}) => {
 
  const {currentWeather,loading,error} = useCurrentWeatherData(location);


  return (
    <>
    <div className="weatherBox">
    <div>Current Weather</div>
    {
                currentWeather && (
                        <>
                          <WeatherInfo data={currentWeather} error={error} loading={loading} unit={unit} />
                        </>
                )
            }
    </div>
          
           
    </>
    
  )
}

export default WeatherDisplay