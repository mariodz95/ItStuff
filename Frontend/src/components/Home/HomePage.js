import React from "react";
import { SimpleCard } from "../../shared/SimpleCard";
import { Categories } from "./Categories";
import { Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

export const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Categories</h1>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {Categories.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={3}>
              <SimpleCard name={item.name} image={item.img}></SimpleCard>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default HomePage;
