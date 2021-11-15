import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

export default function SideMenu() {
    return (
        <div>
      
            <Card
              style={{
                width: "10vw",
                height: "100vh",
                backgroundColor: "cornflowerblue",
                position: "fixed",
              }}
            >
      
      <CardContent>
                <Typography
                  style={{
                  }}
                >
                  Logo
                </Typography>
              </CardContent>
      
              <CardActions>
                <Button size="small">Button</Button>
              </CardActions>
              <CardActions>
                <Button size="small">Button</Button>
              </CardActions>
              <CardActions>
                <Button size="small">Button</Button>
              </CardActions>
              <CardActions>
                <Button size="small">Button</Button>
              </CardActions>
      
              <CardContent>
                <Typography
                  style={{
                    marginBottom: "10vh",
                  }}
                >
                </Typography>
              </CardContent>
      
              <CardActions>
                <Button size="small">Button</Button>
              </CardActions>
              <CardActions>
                <Button size="small">Button</Button>
              </CardActions>
              <CardActions>
                <Button size="small">Button</Button>
              </CardActions>
              <CardActions>
                <Button size="small">Button</Button>
              </CardActions>
              <CardActions>
                <Button size="small">Button</Button>
              </CardActions>
            </Card>
          </div>
    );
  };
