import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

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
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Link
                to={{
                  pathname: "/productdetail",
                  state: { product: props.product },
                }}
              >
                {" "}
                {props.product.name}
              </Link>
              <br />
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
