import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CardsNew from "../views/News/CardsNew";
import Grid from "@mui/material/Grid";
import CardsDetails from "../views/News/CardsDetails";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const NewPage = () => {
  const [showCardId, setShowCardId] = useState();
  const handleClick = (e) => {
    setShowCardId(e);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <Item>
          <CardsNew handleClick={handleClick} />
        </Item>
      </Grid>
      <Grid item xs={9}>
        <Item>
          <CardsDetails showCardId={showCardId} />
        </Item>
      </Grid>
    </Grid>
  );
};

export default NewPage;
