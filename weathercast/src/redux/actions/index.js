export const FETCH_WEATHER_DATA_START = 'FETCH_WEATHER_DATA_START';

export const getWeatherData = () => dispatch => {
    dispatch({type: FETCH_WEATHER_DATA_START});
};