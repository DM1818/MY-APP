import React from "react";
import Carousel from 'react-material-ui-carousel';
import './main.css';
import { Paper, Button } from '@mui/material';
import EventBox from "./EventBox";

export default function EventCarousal({setshowdivs}) {
    var items = [];
    for (let i = 0; i < 5; i++) {
        items.push(
            <div>
                <EventBox />
            </div>
        );
    }

    return (
        <Carousel autoPlay={true} stopAutoPlayOnHover={true} interval={4000} indicators={false} navButtonsAlwaysVisible={true}>
            {
                items
            }
        </Carousel>
    )
}
