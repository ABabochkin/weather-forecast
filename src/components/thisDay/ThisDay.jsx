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

            {
                weatherData.weather ?  

                <img 
                    height={140} 
                    src={process.env.PUBLIC_URL + `/Images/${weatherData.weather[0].main}.svg`}
                    alt='weather' 
                /> : 
                null
            }
                




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