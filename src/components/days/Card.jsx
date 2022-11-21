import React from 'react'
import '../days/days.scss'



const Card = ({dayTemp = [], dayInfo=[]}) => {

    

    return (
        <div className='card'>
            <div className='day'>Сегодня </div>
            <div className='day-info'> 1 ноября </div>
            <div className='day-icon'> 
                <img src={process.env.PUBLIC_URL + `/Images/${dayInfo[0].main}.svg`} alt='icon'/>  
            </div>
            <div className='day' >{Math.floor(dayTemp.temp)}°</div>
            <div className='day-info'> {Math.floor(dayTemp.temp_min)}°</div>
            <div className='day-info'> {dayInfo[0].description}</div>
        </div>
    )
}

export default Card