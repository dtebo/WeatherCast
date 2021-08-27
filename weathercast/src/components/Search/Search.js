import React, {useState} from "react";
import * as MUI from '../../MaterialUI/index';
import axios from "axios";

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

        axios.get("http://api.weatherapi.com/v1/current.json?key=ea8cf72cff1f49fbb4e142540212708&q=" + values.zip + "&aqi=no")
            .then(resp => {
                console.log(resp);
                props.getWeatherData(resp.data);
            })
            .catch(err => {
                console.error(err);
            });
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

export default Search;