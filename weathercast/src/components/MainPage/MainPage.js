import React from "react";
import {connect} from "react-redux";
import Forecast from "../Forecast/Forecast";
import Search from "../Search/Search";

import './MainPage.css';

const MainPage = (props) => {
    return(
        <div>
            <Search />
            {props.weatherData.location ?
             (
                <div className="weatherDataContainer">
                    <p>{props.weatherData.location.name + ", " + props.weatherData.location.region}</p>
                    <img src={"http:" + props.weatherData.current.condition.icon} alt="current conditions" />
                    <p>{props.weatherData.current.condition.text}</p>
                    <p>{"Current Temp: " + Math.round(props.weatherData.current.temp_f) }&#176;</p>
                    <p>{"Feels Like: " + Math.round(props.weatherData.current.feelslike_f)}&#176;</p>
                    <p>{"Humidity: " + props.weatherData.current.humidity + "%"}</p>
                </div>
             ) : (
                 <div className="weatherDataContainer">
                     <p>N/A</p>
                 </div>
             )
            }
            {props.weatherData.location ? (
                <Forecast  />
            ) : ""}
            
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        weatherData: state.weatherData
    };
};

export default connect(mapStateToProps)(MainPage);