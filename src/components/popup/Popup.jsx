import React from 'react'

import '../popup/popup.scss'

import ThisDayItem from '../thisDayItem/ThisDayItem'


import { GlobalSvg } from '../assets/GlobalSvg'


const Popup = (props) => {

    const {
        openModal,
        weatherData = []
    } = props

    const items = [{

        icon_id: 'temp',
        name: 'Температура',
        value: `ddxxxxx`
    },
    {
        icon_id: 'pressure',
        name: 'Давление ',
        value: `ddxxxxxx`
    },
    {
        icon_id: 'precipitation',
        name: 'Осадки',
        value: `ddsssssssssssdddd`
    },
    {
        icon_id: 'wind',
        name: 'Ветер',
        value: `dd`
    }
    ]

    const hours = new Date().getHours();
    const min = new Date().getMinutes();

    return (
        <>
            <div className='blur' ></div>
            <div className='popup' >
                <div className='day' >
                    { weatherData.main  ?  <div className='temp'> {Math.floor(weatherData.main.temp)}° </div> : null }
                    <div className='name'>Сегодня</div>
                    <div className='img'> <GlobalSvg id='sun' /> </div>
                    <div className='time'>
                        Время: <span>{hours}:{min}</span>
                    </div>
                    <div className='city' >
                        Город: <span>{weatherData.name}</span>
                    </div>

                </div>
                <div className='dayInfo-items'>
                    {items.map((item) => (
                        <ThisDayItem key={item.icon_id} item={item} />
                    ))}
                </div>
                <div className='close' onClick={openModal} > <GlobalSvg id='close' /> </div>
            </div>
        </>

    )
}

export default Popup