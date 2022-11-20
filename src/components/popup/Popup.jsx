import React from 'react'
import ThisDayItem from '../thisDayItem/ThisDayItem'
import '../popup/popup.scss'
import { GlobalSvg } from '../assets/GlobalSvg'


const Popup = (props) => {

    const {
        openModal,
        weatherData = {},
        weatherTemp = [{}],
        weatherWind = {},
        mainInfo = {},
    } =  props

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

    const hours = new Date().getHours();
    const min = new Date().getMinutes();

    return (
        <>
            <div className='blur' ></div>
            <div className='popup' >
                <div className='day' style={{AlignItems: 'center'}} >

                    { mainInfo.main  ?  
                    <div className='temp'> {Math.floor(mainInfo.main.temp)}° </div> : null }

                    <div className='name'>Сегодня</div>
                    
                    { mainInfo.weather ?  
                        <img
                            className='img'
                            height={100} 
                            src={process.env.PUBLIC_URL + `/Images/${mainInfo.weather[0].main}.svg`}
                            alt='weather' 
                        /> : null}
                    <div className='time'>
                        Время: <span>{hours}:{min}</span>
                    </div>
                    <div className='city' >
                        Город: <span>{mainInfo.name}</span>
                    </div>

                </div>
                <div className='dayInfo-items'>
                    {items.map((item) => (
                        <ThisDayItem key={item.icon_id} item={item} />
                    ))}
                </div>
                <div className='close' onClick={openModal}  > <GlobalSvg id='close' /> </div>
            </div>
        </>

    )
}

export default Popup