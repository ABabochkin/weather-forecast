import React from 'react'
import { GlobalSvg } from '../assets/GlobalSvg'
import '../days/days.scss'



const Card = ({ day }) => {
    return (
        <div className='card' >
            <div className='day' >{day.day} </div>
            <div className='day-info' >{day.day_info} </div>
            <div className='day-icon'> <GlobalSvg id={day.icon_id} /> </div>
            <div className='day' >{day.temp_day} </div>
            <div className='day-info' >{day.temp_night} </div>
            <div className='day-info' > {day.info} </div>
        </div>
    )
}

export default Card