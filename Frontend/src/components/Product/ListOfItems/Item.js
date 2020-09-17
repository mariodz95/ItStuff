import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Moment from "moment";
import Typography from "@material-ui/core/Typography";

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
  title: {
    fontSize: 14,
  },
  body: {
    fontSize: 10,
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
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <Link
                  to={{
                    pathname: "/productdetail",
                    state: { product: props.product },
                  }}
                >
                  {" "}
                  {props.product.name}
                </Link>
              </Typography>
              <br />
              <p>Price: {props.product.price}</p>
              <Typography
                className={classes.body}
                variant="body2"
                component="p"
              >
                <p>Location: {props.product.location}</p>
                <p>
                  Uploaded:{" "}
                  {Moment(props.product.dateCreated).format("DD/MM/YYYY")}
                </p>
              </Typography>
              <br />
            </CardContent>
          </div>
          {props.product.images[0] !== undefined ? (
            <img
              width={200}
              height={200}
              alt="data"
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
