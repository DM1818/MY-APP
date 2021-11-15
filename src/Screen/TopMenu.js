import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { Box, CardMedia, Grid } from "@material-ui/core";

export default function TopMenu() {
    return (
        <div>
      
            <Card
              style={{
                width : "89vw",
                height: "5vh",
                backgroundColor: "green"
                
              }}
            >
                
                <CardContent>
                    <Grid container>
                        <Grid>
                        <img 
                            src="https://www.pngmagic.com/product_images/gray-solid-circle-png-image.png" 
                            width={40}
                            height={30}
                        />
                        </Grid>
                        <Grid>
                        <img 
                            src="https://www.pngmagic.com/product_images/gray-solid-circle-png-image.png" 
                            width={40}
                            height={30}
                            style={{
                                marginLeft: "75vw"
                            }}
                        />
                        </Grid>
                        <Grid>
                        <img 
                            src="https://www.pngmagic.com/product_images/gray-solid-circle-png-image.png" 
                            width={40}
                            height={30}
                        />
                        </Grid>
                        <Grid>
                        <img 
                            src="https://www.pngmagic.com/product_images/gray-solid-circle-png-image.png" 
                            width={40}
                            height={30}
                        />
                        </Grid>
                        <Grid>
                        <Typography
                            style={{
                            }}
                        >
                        Text
                        </Typography>
                        </Grid>
                    </Grid>
                    
                </CardContent>
            </Card>
            
        </div>
    );
  };
