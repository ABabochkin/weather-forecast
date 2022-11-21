import React, { useState, useEffect } from 'react';
import Header from './header/Header';
import ThisDay from './thisDay/ThisDay';
import ThisDayInfo from './thisDayInfo/ThisDayInfo';
import Popup from './popup/Popup';
import Card from '../components/days/Card'


import '../components/home.scss';



const Home = (props) => {

    const [modal, setModal] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    //const [mainData, setMainData] = useState({}) 
    
    
    const API_KEY = process.env.REACT_APP_API_KEY;

    const getWeather = async (location) => {
        try {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=${location}&units=metric&lang=ru&cnt=7`) 
            .then((response) => response.json())
            .then((data) => {
                setWeatherData(data)
            } )
        } 
        catch (error) {
            alert('Произошла ошибка')
        }
        
    }
    
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=Москва&units=metric&lang=ru&cnt=7`) 
        .then((response) => response.json())
        .then((response) => {
            setWeatherData(response)
            
        } )
        .catch(err => console.log(err)) 
    }, [] ) 

    

    const openModal = () => {
        setModal(!modal);
    }


    return (
        <div>
        { modal ?  
            <Popup
                openModal = {openModal}
                weatherTemp = {weatherData.weather} 
                weatherWind = {weatherData.wind} 
                mainInfo = {weatherData}

            /> : 
                null } 
            <Header getWeather={getWeather}   />
            <div className='home' >

                <ThisDay 
                    openModal={openModal} 
                    weatherData={weatherData.list}
                    weatherCity={weatherData.city}
                />
                <ThisDayInfo 
                    openModal={openModal} 
                    
                    weatherTemp = {weatherData.weather} 
                    weatherWind = {weatherData.wind}
                /> 
            </div>
            <div  className='days'>

            {weatherData.list?.map((day, index) => (
                <Card 
                    key={index}
                    dayTemp = {day.main}
                    dayInfo = {day.weather}
                    
                />
            ) )}

            </div>   
        </div>
    )
}

export default Home