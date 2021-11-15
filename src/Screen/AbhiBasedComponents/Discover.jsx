import React from "react";
import './main.css';
import { Icon } from "react-bootstrap";
import { Container, Row, Col, Form } from "react-bootstrap";
import EventBox from "./EventBox";
import VendorsBox from "./VendorsBox";
import { Grid } from "@material-ui/core";
import Searches from "./Searches";
import SearchResults from "./SearchResults";
import VendorsNearby from "./VendorsNearby";
import Featured from "./Featured";

export default function Discover ({ setshowdivs }) {
    
    return (
        <div className="discover">
            <Container fluid>
                <Grid container>
                    <Grid xs={8} >
                        <Featured setshowdivs={setshowdivs} />
                        <SearchResults setshowdivs={setshowdivs} />
                    </Grid>
                    <Grid xs={4} >
                        <Searches />
                        <VendorsNearby />
                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}
