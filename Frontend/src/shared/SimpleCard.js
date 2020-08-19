import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    cursor: "pointer",
    minWidth: 150,
    "&:hover": {
      backgroundColor: "lightblue",
    },
  },
}));

export const SimpleCard = (props) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      onClick={() => {
        console.log("test", props.name);
      }}
    >
      <CardContent>
        <Typography gutterBottom>{props.name}</Typography>
        <img height="100px" width="100px" src={props.image} alt="image" />
      </CardContent>
    </Card>
  );
};
