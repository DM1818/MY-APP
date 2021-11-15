import React from "react";
import Card from "@material-ui/core/Card";
import { Box } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { Spacing } from "@material-ui/core/styles/createSpacing";

export default function CenterCard() {
    return (
        <Box>
      
            <Card
              style={{
                width : "40vw",
                height: "33vh",
                backgroundColor: "pink",
                marginLeft: "2vw",
                marginTop: "2vh"             
              }}
            >
                
            </Card>
            
        </Box>
    );
  };
