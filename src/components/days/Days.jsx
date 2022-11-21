import React from 'react'
import '../days/days.scss'
import Card from '../days/Card'
import Tabs from '../days/Tabs'



const Days = (props) => {

    const {
        weatherData = {},
        weatherTemp = [{}],
    } = props

    const days = [
        {
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'rain',
            temp_day: `${Math.floor(weatherData.temp)}`,
            temp_night: `${Math.floor(weatherData.temp_min)}`,
            info: `${weatherTemp[0].description}`,
            

        },
        {
            day: 'Завтра',
            day_info: '29 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь',
        },
        {
            day: 'Ср',
            day_info: '30 авг',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь',
        },
        {
            day: 'Чт',
            day_info: '28 авг',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Пт',
            day_info: '28 авг',
            icon_id: 'rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Сб',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Вс',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },

    ]

    return (
        <>
            <Tabs />
            <div className='days'>
                {days.map((day, index) => (
                    <Card
                        day={day}
                        key={index}
                    />
                ))}
            </div>
        </>

    )
}

export default Days