import React, { useEffect, useState } from 'react'
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const ForecastDay = ({ data,unit }) => {
    const { day, date } = data;
    const [dateMap, setDateMap] = useState(null);
    let [today, setToday] = useState(() => {
        return dayNames[new Date().getDay()]

    })
    useEffect(() => {
        let currentDate = new Date(date);
        setDateMap(() => {
            return {
                month: currentDate.getMonth(),
                date: currentDate.getDate(),
                year: currentDate.getFullYear(),
                day: currentDate.getDay()
            }
        })
    }, [date])
    return (

        <>
            {
                data && (

                    <li className={`forecastday ${dayNames[dateMap?.day] === today ? "today" : ""}`}>
                        <div className="tempRange">
                            {unit ? (
                                // <span>{Math.floor(data.current.temp_c)} C&deg; </span>
                                <>
                                    <span> {Math.floor(day.mintemp_c)}&deg;</span>   <span> -</span> <span>{Math.floor(day.maxtemp_c)} C&deg;   </span>

                                </>

                            ) : (
                                // <span>{Math.floor(data.current.temp_f)} F&deg; </span>
                                <>
                                    <span> {Math.floor(day.mintemp_f)}&deg;</span>   <span> -</span> <span>{Math.floor(day.maxtemp_f)} F&deg;  </span>

                                </>

                            )}
                        </div>
                        {/* <div className="maxTemp">
                            
                        </div> */}
                        <div className="forecastDate">
                            {dateMap?.date} / {dateMap?.month}
                        </div>
                        <div className="forecastDay">

                            {dayNames[dateMap?.day] === today ? (<div>Today</div>) : dayNames[dateMap?.day]}
                        </div>
                        <div className="forecastCondition">
                            {day.condition?.text}
                        </div>
                        <div className="forecastIcon">
                            <img src={`${day.condition.icon}`} alt="" />
                        </div>
                    </li>
                )
            }

        </>

    )
}

export default ForecastDay