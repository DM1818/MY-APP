import React from "react";
import './main.css';
import { Icon } from "react-bootstrap";
import { Container, Row, Col, Form } from "react-bootstrap";
import EventBox from "./EventBox";
import VendorsBox from "./VendorsBox";
import Searches from "./Searches";

export default function SearchResults({setshowdivs}) {
    return (
        <><h5>Vendors Results</h5><div className="event_box">
            <h5 className="text_ven_header">X Results shown here</h5>

            <EventBox setshowdivs={setshowdivs} />
            <EventBox setshowdivs={setshowdivs} />
            <EventBox setshowdivs={setshowdivs} />
            <EventBox setshowdivs={setshowdivs} />

        </div></>
    )
}