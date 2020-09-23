import React, { useState } from "react";
import { SimpleCard } from "../../shared/SimpleCard";
import { categories } from "../../shared/Categories";
import { Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";
import { history } from "../../helpers/history";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 50,
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

export const HomePage = () => {
  const classes = useStyles();
  const [value, setValue] = useState();

  const fetchData = () => {
    {
      history.push({ pathname: "/items/", state: { search: value } });
    }
  };

  return (
    <div className={classes.root}>
      <SearchBar
        value={value}
        onChange={(newValue) => setValue(newValue)}
        onRequestSearch={() => fetchData()}
      />
      <br />
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {categories.map((item) => {
          return (
            <Grid key={item.name} item xs={12} sm={6} md={3}>
              <SimpleCard name={item.name} image={item.img}></SimpleCard>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default HomePage;
