import React from "react";
import Card from "@material-ui/core/Card";
import { Box } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { Spacing } from "@material-ui/core/styles/createSpacing";
import CenterCard from "./CenterCard";
import CenterText from "./CenterText";

export default function CenterColumn() {
    return (
        <Box>
            <Box>
                <CenterCard />
            </Box>
            <Box>
                <CenterText />
            </Box>
            <Box>
                <CenterCard />
            </Box>
            <Box>
                <CenterText />
            </Box>
            <Box>
                <CenterCard />
            </Box>
        </Box>
    );
  };
