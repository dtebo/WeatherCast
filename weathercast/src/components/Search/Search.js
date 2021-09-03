import React, {useState} from "react";
import {connect} from 'react-redux';
import * as MUI from '../../MaterialUI/index';
import { getWeatherData } from "../../redux/actions";

const initialValues = {
    zip: ""
};

const Search = (props) => {
    const classes = MUI.useStyles();

    const [values, setValues] = useState(initialValues);

    const handleChanges = (event) => {
        setValues({
            [event.target.name]: event.target.value
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();

        getWeatherData(values.zip);
        //Get weather data
        // axios.get("http://api.weatherapi.com/v1/forecast.json?key=ea8cf72cff1f49fbb4e142540212708&q=" + values.zip + "&days=5&aqi=no&alerts=no")
        //     .then(resp => {
        //         console.log(resp);
        //         props.getWeatherData(resp.data);
        //     })
        //     .catch(err => {
        //         console.error(err);
        //     });
    };

    return (
        <form 
            className={classes.root}
            onSubmit={onSubmit}
            noValidate
        >
            <MUI.TextField 
                id="outlined-basic"
                name="zip"
                label="Search by Zip" 
                variant="outlined"
                onChange={handleChanges}
            />
        </form>
    );
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, {getWeatherData})(Search);