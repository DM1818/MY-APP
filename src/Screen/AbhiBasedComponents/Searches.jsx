import React from "react";
import './main.css';
import { Icon } from "react-bootstrap";
import { Container, Row, Col, Form } from "react-bootstrap";
import EventBox from "./EventBox";
import VendorsBox from "./VendorsBox";

export default function Searches() {
    return (
        <div className="event_box">
            <h5 className="text_ven_header mb-3">Vendor Search</h5>
                            <div className="search_box">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <i class="fas fa-search"></i>
                                    <Form.Control type="search" placeholder="Search for...." />
                                </Form.Group>
                            </div>
                            <div className="calender search_box">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <Form.Control type="location" placeholder="City" />
                                </Form.Group>
                            </div>
                            <div className="calender search_box">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <i class="fas fa-calendar"></i>
                                    <Form.Control type="date" placeholder="Choose Date" />
                                </Form.Group>
                            </div>
                            <div style={{height: "18px"}}/>
                            <span className="ven_btn d-block" >Search Events </span>
                        </div>
    )
}