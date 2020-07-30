import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

const noPointer = { cursor: "pointer" };

export const NavigationBar = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid justify="space-between" container>
            <Typography
              variant="h6"
              style={noPointer}
              onClick={() => {
                history.push("/");
              }}
            >
              ItStuff
            </Typography>
          </Grid>
          <Link style={linkStyle} to="/login">
            <Button
              variant="contained"
              color="primary"
              className={classes.menuButton}
            >
              Login
            </Button>
          </Link>
          <Link style={linkStyle} to="/register">
            <Button variant="contained" color="primary">
              Register
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
