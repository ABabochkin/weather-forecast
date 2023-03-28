import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header/Header";
import ThisDay from "./thisDay/ThisDay";
import ThisDayInfo from "./thisDayInfo/ThisDayInfo";
import Card from "../components/days/Card";

import "../components/home.scss";

const Home = () => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;

  const getWeather = async (location) => {
    try {
      setLoading(true);
      const response = await axios.get(
        ` https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=${location}&units=metric&lang=ru&cnt=7`
      );
      setWeatherData(response.data);
      setLoading(false);
      console.log(weatherData);
    } catch (error) {
      console.log("Произошла ошибка", error);
    }
  };

  const defaultWeather = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=Москва&units=metric&lang=ru&cnt=7`
      );
      setWeatherData(response.data);
      setLoading(false);
      console.log(weatherData);
    } catch (error) {
      console.log("Произошла ошибка", error);
    }
  };

  useEffect(() => {
    defaultWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header getWeather={getWeather} />
      <div className="home">
        <ThisDay weatherData={weatherData} />
        <ThisDayInfo weatherData={weatherData} />
      </div>
      <div className="days">
        {weatherData.list?.map((day, index) => (
          <Card key={index} dayTemp={day.main} dayInfo={day.weather} />
        ))}
      </div>
    </div>
  );
};

export default Home;
