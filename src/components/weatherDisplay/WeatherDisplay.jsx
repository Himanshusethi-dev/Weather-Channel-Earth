import React, { useEffect,useState } from 'react'
import { fetcher } from '../../services/api'
import { apiKey } from '../../services/api'
import './style.css'
import WeatherInfo from '../weatherInfo/WeatherInfo'
import useCurrentWeatherData from '../../hooks/useCurrentWeatherData'
import { Link } from 'react-router-dom'
const WeatherDisplay = ({location,unit}) => {
 
  const {currentWeather,loading,error} = useCurrentWeatherData(location);
  useEffect(()=>{
    console.log("location",location);
    console.log({currentWeather,loading,error})
  },[location,currentWeather])

  return (
    <>
    <Link to={'/q'}>query</Link>
    <div className="weatherBox">
    <div>Current Weather</div>
    {
                !loading ? (
                        <>
                          <WeatherInfo data={currentWeather} error={error} loading={loading} unit={unit} location={location} />
                        </>
                ) : (
                  <div>
                      Loading....
                    </div>
                )
            }
    </div>
          
           
    </>
    
  )
}

export default WeatherDisplay