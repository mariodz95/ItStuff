import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { history } from "../../helpers/history";

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

export const NavigationBar = (props) => {
  const classes = useStyles();
  const user = localStorage.getItem("user");
  return (
    <div className={classes.root}>
      <AppBar style={{ background: "#2E3B55" }} position="static">
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
            {user !== null ? (
              <Link style={linkStyle} to="/product">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.menuButton}
                >
                  Sell Item
                </Button>
              </Link>
            ) : null}
          </Grid>
          {user === null ? (
            <React.Fragment>
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
            </React.Fragment>
          ) : (
            <Button
              variant="contained"
              onClick={() => {
                localStorage.removeItem("user");
                history.push("/");
              }}
              color="primary"
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
