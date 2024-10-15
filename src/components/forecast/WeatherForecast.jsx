import React, { Fragment, useEffect } from 'react'
import useForecastData from '../../hooks/useForecastData';
import "./style.css";
import ForecastDay from './ForecastDay';

const WeatherForecast = ({ location, days = 10,unit }) => {
  const { data } = useForecastData(location, days)
  useEffect(() => {
    console.log(data);
  })
  return (
    <div>
      {data && (
        <>
          <div className="weeklyForecast">
            <div className="title">
              5 Day Weather
            </div>
            <ul className="forecastDays">
              {data?.forecast.forecastday.map((day) => (
                <Fragment key={day.date_epoch}>
                  <ForecastDay data={day} unit={unit} />
                </Fragment>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

export default WeatherForecast