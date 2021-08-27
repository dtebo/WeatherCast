import React from "react";

import "./Forecast.css";
import ForecastCard from "./ForecastCard";

const Forecast = (props) => {
    return (
        <div className="forecastContainer">
            {props.weatherData.forecast.forecastday.map((d) => {
                return(
                    <ForecastCard 
                        dayData={d}
                        key={d.date}
                    />
                )
            })}
        </div>
    );
};

export default Forecast;