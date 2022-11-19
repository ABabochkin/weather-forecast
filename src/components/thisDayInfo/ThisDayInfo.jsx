import React from 'react'

import '../thisDayInfo/thisDayInfo.scss';
import ThisDayItem from '../thisDayItem/ThisDayItem';




const ThisDayInfo = (props) => {
    const {
        openModal,
        weatherData = []
    } = props


        const items = [{

            icon_id: 'temp',
            name: 'Температура:',
            value: 'xx'
        },
        {
            icon_id: 'pressure',
            name: 'Давление:',
            value: `xxx`
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки:',
            value: `xxx`
        },
        {
            icon_id: 'wind',
            name: 'Ветер:',
            value: `xxx`
        }
        ] 

    return (
        <div className='dayInfo' onClick={openModal} >
            <div className='dayInfo-items'>
                {items.map((item) => (
                        <ThisDayItem key={item.icon_id} item={item} />
                    ))}
            </div>
            <img width={460} height={200} className='cloud' src='./images/cloud.png' alt='cloud' />
        </div>
    )
}

export default ThisDayInfo