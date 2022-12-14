import React from 'react'

import '../thisDayInfo/thisDayInfo.scss';
import ThisDayItem from '../thisDayItem/ThisDayItem';




const ThisDayInfo = (props) => {
    const {
        openModal,
        weatherData = {},
        weatherTemp = [{}],
        weatherWind = {}
    } = props


    
        const items = [{

            icon_id: 'temp',
            name: 'Температура:',
            value:  `${Math.floor(weatherData.temp)}° ощущается как ${Math.floor(weatherData.feels_like)}°`

        },
        {
            icon_id: 'pressure',
            name: 'Давление:',
            value: `${weatherData.pressure} - нормальное`
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки:',
            value: `${weatherTemp[0].description}`
        },
        {
            icon_id: 'wind',
            name: 'Ветер:',
            value: `${weatherWind.speed} м/с`
        }
        ] 
    

        

    return (
        <div className='dayInfo' onClick={openModal} >
            <div className='dayInfo-items'>
                {items.map((item) => (
                        <ThisDayItem key={item.icon_id} item={item} />
                    ))}
            </div>
            <img width={430} height={180} className='cloud' src='./images/cloud.png' alt='cloud' />
        </div>
    )
}

export default ThisDayInfo