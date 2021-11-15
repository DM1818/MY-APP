import React from "react";
import './main.css';
import EventCarousal from "./EventCarousal";

export default function Featured({setshowdivs}) {
    return (
        <div className="feature_event ">
            <h5 >Featured Vendors</h5>
            <div className="event_box">
                <EventCarousal setshowdivs={setshowdivs} />
            </div>            
        </div>
    )
}