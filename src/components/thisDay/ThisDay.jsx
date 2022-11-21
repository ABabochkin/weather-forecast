import React from 'react'


import '../thisDay/thisDay.scss'



const ThisDay = (props) => {

    const {
        openModal,
        weatherData = [{}],
        weatherCity = [],
    } = props 

    const hours = new Date().getHours();
    const min = new Date().getMinutes();




    return (
        <div className='container'>
            <div className='day' onClick={openModal} >
                <div className='day-upper'>
                    <div className='day-temp'>
                        {weatherData[0].main ? <p>{Math.floor(weatherData[0].main.temp)}°</p> : null }
                        <span>Сегодня</span>
                    </div>
            {weatherData[0].weather ?  
                <img 
                    height={140} 
                    src={process.env.PUBLIC_URL + `/Images/${weatherData[0].weather[0].main}.svg`}
                    alt='weather' 
                /> : 
                null}
                </div>
                <div className='day-under' >
                    <span>Время: {hours}:{min}</span>
                    <span>Город: {weatherCity.name ? weatherCity.name : 'Неизвестно'} </span>
                </div>
            </div>
        </div>
    )
}

export default ThisDay