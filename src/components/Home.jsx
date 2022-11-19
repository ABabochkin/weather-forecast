import React, { useState, useEffect } from 'react';
import Header from './header/Header';
import ThisDay from './thisDay/ThisDay';
import ThisDayInfo from './thisDayInfo/ThisDayInfo';
import Popup from './popup/Popup';
import Days from './days/Days';


import '../components/home.scss';



const Home = (props) => {

    const [modal, setModal] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    
    const API_KEY = process.env.REACT_APP_API_KEY;

    const getWeather = (location) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric&lang=ru`) 
            .then((response) => response.json())
            .then((response) => {
                setWeatherData(response)
                console.log(weatherData)
            } )
            .catch(err => console.log(err)) 
    }
    
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Москва&appid=${API_KEY}&units=metric&lang=ru`) 
        .then((response) => response.json())
        .then((response) => {
            setWeatherData(response)
            console.log(weatherData)
        } )
        .catch(err => console.log(err)) 
    }, [] )

    

    const openModal = () => {
        setModal(!modal);
    }


    return (
        <div>
        { modal ?  <Popup openModal={openModal} weatherData={weatherData} /> : null } 
            <Header getWeather={getWeather} location  />
            <div className='home' >
                <ThisDay 
                    openModal={openModal} 
                    weatherData={weatherData} 
                />
                <ThisDayInfo 
                    openModal={openModal} 
                    weatherData={weatherData.main} 
                    weatherTemp = {weatherData.weather} 
                    weatherWind = {weatherData.wind}
                /> 
            </div>
            <Days />
        </div>
    )
}

export default Home