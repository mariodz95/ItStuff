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
    <React.Fragment>
      {props.productList.length > 0 ? (
        <React.Fragment>
          {props.productList.map((item) => {
            return (
              <Item
                handleDelete={props.handleDelete}
                product={item}
                profileSection={props.profileSection}
              />
            );
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
                variant="outlined"
                color="primary"
                count={props.totalPages}
                onChange={props.handlePagination}
              />
            </div>
          </Grid>
        </React.Fragment>
      ) : (
        <h1 className="no-items">No item's for display.</h1>
      )}
    </React.Fragment>
  );
};

export default ItemListPresenter;
