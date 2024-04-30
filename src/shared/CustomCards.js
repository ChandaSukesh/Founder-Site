import Box from "@mui/material/Box";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

function CustomCards(props) {
  // const { children } = props;
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card sx={{ boxShadow: "none" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Welcome
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a simple example of using the Card component from
            Material-UI.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CustomCards;
