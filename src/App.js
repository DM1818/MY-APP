import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import SideMenu from "./Screen/SideMenu";
import TopMenu from "./Screen/TopMenu";
import CenterCard from "./Screen/CenterCard";
import CenterText from "./Screen/CenterText";
import TopRightCard from "./Screen/TopRightCard";
import MiddleRightCard from "./Screen/MiddleRightCard";
import { Grid } from "@material-ui/core";
import CenterColumn from "./Screen/CenterColumn";
import RightColumn from "./Screen/RightColumn";
import Sidenav from "./Screen/AbhiBasedComponents/Sidenav";
import Dashheader from "./Screen/AbhiBasedComponents/Dashheader";
import Discover from "./Screen/AbhiBasedComponents/Discover";
import { Container, Row, Col } from "react-bootstrap";
import { Dropdown } from "bootstrap";
 
export default function App() {

  return (
    <div className={`ven_dash`}>
        < Sidenav  />
       
        <div className={`side_wrapper`}>
            <Container fluid>
                <Row>
                    <Col>
                    <Dashheader />


                    </Col>
                </Row>
            </Container>
            <Discover />
            
           
        </div>

            
        </div>

  );
};

/*
<Grid container className={`ven_dash`}>
      <Grid>
      <Sidenav />
      </Grid>
      <Grid className={`side_wrapper`}>
        <Grid >
          <Dashheader />
        </Grid>
        <Grid container>
          <Grid>
            <CenterColumn />
          </Grid>
          <Grid>
            <RightColumn />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
*/

//Grid examples
//<Grid container>
//      <Grid item xs={6} md= {6}>
//       <SideMenu />
//      </Grid>
//      <Grid direction= "row" container item xs={6}>
//        <Grid item xs={12}>
//          <SideMenu />
//        </Grid>
//        <Grid item xs={12}>
//          <SideMenu />
//       </Grid>
//      </Grid>
//    </Grid>