import React from "react";

import "../thisDayInfo/thisDayInfo.scss";
import ThisDayItem from "../thisDayItem/ThisDayItem";

const ThisDayInfo = (props) => {
  const { weatherData = {} } = props;

  const items = [
    {
      icon_id: "temp",
      name: "Температура:",
      value: `${Math.floor(
        weatherData?.list?.[0]?.main?.temp
      )}° ощущается как ${Math.floor(
        weatherData?.list?.[0]?.main?.feels_like
      )}°`,
    },
    {
      icon_id: "pressure",
      name: "Давление:",
      value: `${weatherData?.list?.[0]?.main?.pressure} рт/с`,
    },
    {
      icon_id: "precipitation",
      name: "Осадки:",
      value: `${weatherData?.list?.[0]?.weather[0]?.description}`,
    },
    {
      icon_id: "wind",
      name: "Ветер:",
      value: `${weatherData?.list?.[0]?.wind?.speed} м/с `,
    },
  ];

  return (
    <div className="dayInfo">
      <div className="dayInfo-items">
        {items.map((item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img
        width={430}
        height={180}
        className="cloud"
        src="./images/cloud.png"
        alt="cloud"
      />
    </div>
  );
};

export default ThisDayInfo;
