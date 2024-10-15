import React, { useState } from 'react'



const WeatherInfo = ({ data, error, loading, unit,location }) => {


    if (error) {
        return (
            <div className='weatherInfo'>
                No results found
            </div>
        )
    }
    if (!loading) {
        <div className='weatherInfo'>
            Loading...
        </div>
    }

    return (

        <>
            {
                data && (
                    <div className='weatherInfo'>
                        <div className="city">
                            {data.location.name}
                        </div>
                        <div className="temperature">
                            {unit ? (
                                <span>{Math.floor(data.current.temp_c)} C&deg; </span>
                            ) : (
                                <span>{Math.floor(data.current.temp_f)} F&deg; </span>
                            )}

                        </div>
                        <div className="conditionWrapper">
                            <div className="condition">
                                {data.current.condition.text}
                            </div>
                            <img src={`${data.current.condition.icon}`} alt={`${data.current.condition.text}`} />
                        </div>

                        <div className="extraInfoContainer">
                            <div className="extraInfoTile">
                                <div className="extInfoText">
                                    Feels like
                                </div>
                                <div className='tileValue'>
                                    {unit ? (
                                        <span>{Math.floor(data.current.feelslike_c)} C&deg; </span>
                                    ) : (
                                        <span>{Math.floor(data.current.feelslike_f)} F&deg; </span>
                                    )}
                                    {/* {Math.floor(data.current.feelslike_c)}&deg; {unit ? 'celcius' : 'Fahrenhiet'} */}
                                </div>
                            </div>
                            <div className="extraInfoTile">
                                <div className="extInfoText">
                                    Humidity
                                </div>
                                <div className='tileValue'>
                                    {Math.floor(data.current.humidity)}%
                                </div>
                            </div>
                        </div>

                    </div>

                )
            }
        </>

    )
}

export default WeatherInfo