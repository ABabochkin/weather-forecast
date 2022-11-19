import React from 'react'

import '../thisDay/thisDay.scss'



const ThisDay = (props) => {

    const {
        openModal,
        weatherData = [] ,
    } = props 

    const hours = new Date().getHours();
    const min = new Date().getMinutes();


    return (
        <div className='container'>
            <div className='day' onClick={openModal} >
                <div className='day-upper' >
                    <div className='day-temp' >
                        { weatherData.main ? <p>{Math.floor(weatherData.main.temp)}°</p> : null } 
                        <span>Сегодня</span>
                    </div>
                    <img width={120} height={120} src='./images/sun.png' alt='sun' />
                </div>
                <div className='day-under' >
                    <span>Время: {hours}:{min}</span>
                    <span>Город: {weatherData.name} </span>
                </div>
            </div>
        </div>
    )
}

export default ThisDay