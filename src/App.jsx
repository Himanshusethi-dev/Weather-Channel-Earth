import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { apiKey } from './services/api';
import { fetcher } from './services/api';
import WeatherDisplay from './components/weatherDisplay/WeatherDisplay';
import WeatherForecast from './components/forecast/WeatherForecast';
import SearchForm from './components/weatherSearch/SearchForm';
import ToggleTemperature from './components/temperatureToggle/ToggleTemperature';
const temperatureUnits = {
  c : 'celcius',
  f : 'fahrenheit'
}
function App() {
  const [location, setLocation] = useState('New york')
  const [unit,setUnit] = useState(true);

  const changeUnit = ()=>{
    setUnit(!unit);
  }
  const manageLocation = useCallback((value)=>{
    setLocation(value)
  },[])
  return (
    <>
      <div className='container'>
        {/* <div className="location">
      
           <input type="text" value={location} onChange={(e)=>{handleLocation}} />
      
      </div> */}
        <div className="weatherPage">
         
          <h1 className='mainHeading'>Weather Channel</h1>

          <SearchForm   manageLocation={manageLocation} />
          <ToggleTemperature  converter={changeUnit} />
          <WeatherDisplay location={location} unit={unit} />
          <WeatherForecast location={location}  unit={unit} />
        </div>

      </div>
    </>
  )
}

export default App
