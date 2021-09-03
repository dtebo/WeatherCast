import React from "react";

import * as MUI from "../../MaterialUI/index";

import moment from "moment";

const ForecastCard = (props) => {
    console.log(props.dayData);
    return (
        <div>
            <p></p>
            <MUI.Card>
                <MUI.CardContent>
                    <MUI.Typography>
                        {moment(props.dayData.date).format('dddd')}
                    </MUI.Typography>
                    <MUI.Typography>
                        <img src={"http:" + props.dayData.day.condition.icon} alt="conditions" />
                    </MUI.Typography>
                    <MUI.Typography>
                        HI: 
                        {Math.round(props.dayData.day.maxtemp_f)}&#176;
                    </MUI.Typography>
                    <MUI.Typography>
                        LO:
                        {Math.round(props.dayData.day.mintemp_f)}&#176;
                    </MUI.Typography>
                </MUI.CardContent>
            </MUI.Card>
        </div>
    );
};

export default ForecastCard;