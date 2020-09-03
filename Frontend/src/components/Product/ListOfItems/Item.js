import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    width: 300,
  },
}));

const Item = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="sm">
        <Card
          className={classes.root}
          onClick={() => {
            console.log("props. kartica", props.product.name);
          }}
        >
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography gutterBottom>{props.product.name}</Typography>
              <p>{props.product.name}</p>
              <br />
              <p>{props.product.description}</p>
            </CardContent>
          </div>
          {props.product.images[0] !== undefined ? (
            <img
              width={200}
              height={200}
              src={`data:image/jpeg;base64,${props.product.images[0].imageData}`}
            />
          ) : null}{" "}
        </Card>
        <br />
      </Container>
    </div>
  );
};

export default Item;
