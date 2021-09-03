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

        //Get weather data
        props.getWeatherData(values.zip);
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
    console.log(state);
    return state;
};

export default connect(mapStateToProps, {getWeatherData})(Search);