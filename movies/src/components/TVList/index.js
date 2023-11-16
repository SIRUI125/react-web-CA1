import React from "react";
import TV from "../TVCard";
import Grid from "@mui/material/Grid";

const TVList = ( {TVs, action }) => {
// Mapping over the TVs array to transform each TV object into a TVCard component.
  let TVCard = TVs.map((t) => (
// Using the Grid component from Material-UI for layout. Each TVCard will be placed inside a Grid item.
    <Grid key={t.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TV key={t.id} TV={t} action={action} />
    </Grid>
// Rendering the TVCard component for each TV. It receives a TV object and an action as props.
  ));
  return TVCard;
};

export default TVList;