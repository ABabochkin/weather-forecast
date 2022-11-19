
import React from 'react'
import '../thisDayItem/thisDayItem.scss'

import { IndicatorSvg } from '../assets/IndicatorSvg'





const ThisDayItem = ({ item }) => {
    const { icon_id, name, value } = item;
    return (
        <div className='items' >
            <div className='indicator' > <IndicatorSvg id={icon_id} /> </div>
            <div className='name' > {name} </div>
            <div className='value' > {value} </div>
        </div>
    )
}

export default ThisDayItem