import React from "react";
import {connect} from "react-redux";
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

const mapStateToProps = (state) => {
    return {
        weatherData: state.weatherData
    };
};

export default connect(mapStateToProps)(Forecast);