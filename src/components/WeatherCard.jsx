import React from 'react'
import './styles/Weather.css'

const WeatherCard = ({weather, temps, isCelsius, changeUnitTemp}) => {
  return (
    <section className='weatherCard'>
        <h1 className='weatherCard-title'>Weather App</h1>
        <h2 className='weatherCard-place'>{weather?.name}, {weather?.sys.country}</h2>
        <div className='block-img-grade'>
          <div className='weatherCard-img'>
            <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
          </div>   
          <h3 className='weatherCard-temp'>{isCelsius ?  temps?.celsius + ' °C' : temps?.fahrenheit + ' °F'} </h3>
        </div>
        
        <ul className='weatherCard-list'>
            <li className='weatherCard-description'>{weather?.weather[0].main}, {weather?.weather[0].description}</li>
            <li><span>Wind Speed: </span>{weather?.wind.speed} m/sec</li>
            <li><span>Clouds: </span>{weather?.clouds.all} %</li>
            <li><span>Pressure: </span>{weather?.main.pressure} hPa</li>
        </ul>
        <button className='weatherCard-btn' onClick={changeUnitTemp}>&deg;C / &deg;F</button>
    </section>
  )
}

export default WeatherCard