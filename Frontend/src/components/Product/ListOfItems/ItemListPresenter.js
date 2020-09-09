import React from "react";
import Item from "./Item";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const ItemListPresenter = (props) => {
  const classes = useStyles();

  return (
    <div>
      {props.productList.map((item) => {
        return <Item product={item} />;
      })}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ marginBottom: "100px" }}
      >
        <div className={classes.root}>
          <Pagination
            color="primary"
            count={props.totalPages}
            onChange={props.handlePagination}
          />
        </div>
      </Grid>
    </div>
  );
};

export default ItemListPresenter;
