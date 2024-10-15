import { useState,useCallback  } from 'react'
import SearchForm from '../components/weatherSearch/SearchForm'
import WeatherDisplay from '../components/weatherDisplay/WeatherDisplay'
import WeatherForecast from '../components/forecast/WeatherForecast'
import ToggleTemperature from '../components/temperatureToggle/ToggleTemperature'
const WeatherPage = () => {
    const [location, setLocation] = useState('New york')
    const [unit, setUnit] = useState(true);
    const changeUnit = () => {
        setUnit(!unit);
      }
      const manageLocation = useCallback((value) => {
        setLocation(value)
      }, [])
  return (
    <>
              <SearchForm manageLocation={manageLocation} />
              <ToggleTemperature converter={changeUnit} />
              <WeatherDisplay location={location} unit={unit} />
              <WeatherForecast location={location} unit={unit} />
    </>
  )
}

export default WeatherPage