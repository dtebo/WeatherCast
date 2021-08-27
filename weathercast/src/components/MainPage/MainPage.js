import React, {useState} from "react";
import Search from "../Search/Search";

const MainPage = () => {
    const [weatherData, setWeatherData] = useState({});

    const getWeatherData = (data) => {
        setWeatherData(data);
    };

    return(
        <>
            <Search getWeatherData={getWeatherData} />
            <p>{weatherData.location.name}</p>
        </>
    );
};

export default MainPage;