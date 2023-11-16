import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

// Style object for the root element, used in Paper components.
const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
// PeopleDetails functional component, receiving 'people' as a prop.
  const PeopleDetails = ({ people }) => {  // State for managing the drawer's open/close status.
  return (
// Fragment to group multiple elements without adding extra nodes to the DOM.
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>
      <Typography variant="h6" component="p">
        {people.biography}
      </Typography>
      <Paper 
        component="ul" 
        sx={{...root}}
      >
      </Paper>
      <Paper component="ul" sx={{...root}}>
      </Paper>
      </>
  );
};
export default PeopleDetails ;