import axios from 'axios';

export const FETCH_WEATHER_DATA_START = 'FETCH_WEATHER_DATA_START';
export const FETCH_WEATHER_DATA_SUCCESS = 'FETCH_WEATHER_DATA_SUCCESS';
export const FETCH_WEATHER_DATA_FAIL = 'FETCH_WEATHER_DATA_FAIL';

export const getWeatherData = (zip) => dispatch => {
    dispatch({type: FETCH_WEATHER_DATA_START});
console.log("ACTION CREATOR: " + zip);
    axios.get("http://api.weatherapi.com/v1/forecast.json?key=ea8cf72cff1f49fbb4e142540212708&q=" + zip + "&days=5&aqi=no&alerts=no")
        .then(res => {
            dispatch({type: FETCH_WEATHER_DATA_SUCCESS, payload: res.data});
        })
        .catch(err => {
            dispatch({type: FETCH_WEATHER_DATA_FAIL, payload: err});
        });
};