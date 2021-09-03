import {
    FETCH_WEATHER_DATA_START,
    FETCH_WEATHER_DATA_SUCCESS,
    FETCH_WEATHER_DATA_FAIL
} from '../actions';

const initialState = {
    weatherData: {},
    error: '',
    isLoading: false
};

const forecastReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_WEATHER_DATA_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_WEATHER_DATA_SUCCESS:
            return {
                ...state,
                weatherData: action.payload,
                isLoading: false
            };
        case FETCH_WEATHER_DATA_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
};

export default forecastReducer;