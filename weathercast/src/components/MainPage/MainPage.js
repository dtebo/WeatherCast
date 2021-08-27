import React, {useState} from "react";
import Forecast from "../Forecast/Forecast";
import Search from "../Search/Search";

import './MainPage.css';

const MainPage = () => {
    const [weatherData, setWeatherData] = useState({});

    const getWeatherData = (data) => {
        setWeatherData(data);
    };

    return(
        <>
            <Search getWeatherData={getWeatherData} />
            {weatherData.location ?
             (
                <div className="weatherDataContainer">
                    <p>{weatherData.location.name + ", " + weatherData.location.region}</p>
                    <img src={"http:" + weatherData.current.condition.icon} alt="current conditions" />
                    <p>{weatherData.current.condition.text}</p>
                    <p>{"Current Temp: " + Math.round(weatherData.current.temp_f) }&#176;</p>
                    <p>{"Feels Like: " + Math.round(weatherData.current.feelslike_f)}&#176;</p>
                    <p>{"Humidity: " + weatherData.current.humidity + "%"}</p>
                </div>
             ) : (
                 <div className="weatherDataContainer">
                     <p>N/A</p>
                 </div>
             )
            }
            <Forecast />
        </>
    );
};

export default MainPage;