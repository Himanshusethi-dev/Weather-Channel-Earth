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
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import QueryComponent from './components/queryComponent/QueryComponent';
import WeatherPage from './pages/WeatherPage';
import Products from './pages/Products.jsx';
const temperatureUnits = {
  c: 'celcius',
  f: 'fahrenheit'
}


function App() {
  const queryClient = new QueryClient()
  return (
    <>
      {/* <Link to="ss">Ss</Link> */}

      <QueryClientProvider client={queryClient}>
        <>

          <div className='container'>
            <div className="weatherPage">

              <h1 className='mainHeading'>Weather Channel</h1>

              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<WeatherPage />} />
                  <Route path='/q' element={<QueryComponent />} />
                  <Route path='/products' element={<Products />} />
                </Routes>
              </BrowserRouter>


            
            </div>

          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </>
      </QueryClientProvider>


    </>

  )
}

export default App
