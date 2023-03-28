import React from "react";

import "../thisDay/thisDay.scss";

const ThisDay = (props) => {
  const { weatherData = {} } = props;

  const timezoneOffset = weatherData?.city?.timezone;

  const utcTimestamp = Date.now(); // получаем timestamp в UTC
  const localTimestamp = utcTimestamp + timezoneOffset * 1000; // добавляем сдвиг в миллисекундах
  const localDate = new Date(localTimestamp); // создаем объект Date с локальным временем
  const hours = localDate.getHours() - 3;
  const minutes = localDate.getMinutes();
  const formettedTime =
    (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes;
  console.log(formettedTime);

  return (
    <div className="container">
      <div className="day">
        <div className="day-upper">
          <div className="day-temp">
            <p>{Math.floor(weatherData?.list?.[0]?.main?.temp)}°</p>
            <span>Сегодня</span>
          </div>
        </div>
        <div className="day-under">
          <span>Время: {formettedTime}</span>
          <span>Город: {weatherData?.city?.name}</span>
        </div>
      </div>
    </div>
  );
};

export default ThisDay;
