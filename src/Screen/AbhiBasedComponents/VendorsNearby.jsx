import React from "react";
import './main.css';
import VendorsBox from "./VendorsBox";

export default function VendorsNearby() {
    return (
        <div className="event_box">
            <h5 className="text_ven_header mb-3">Vendors Nearby</h5>
            <VendorsBox />
            <VendorsBox />
            <VendorsBox />
        </div>
    )
}