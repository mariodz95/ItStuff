import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../../shared/MyTextInput";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import "./Auth.scss";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Register = (props) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        email: "",
        gender: "",
        address: "",
        country: "",
        city: "",
        zip: "",
        birthDate: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        userName: Yup.string().required("Required"),
        password: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        address: Yup.string().required("Required"),
        country: Yup.string().required("Required"),
        city: Yup.string().required("Required"),
        zip: Yup.string().required("Required"),
        birthDate: Yup.date()
          .default(function () {
            return new Date();
          })
          .required("Required"),
      })}
      onSubmit={(values) => {
        props.register(values);
      }}
    >
      {(formik) => (
        <form
          className={classes.root}
          onSubmit={formik.handleSubmit}
          noValidate
          autoComplete="off"
        >
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form
                className={classes.form}
                onSubmit={formik.handleSubmit}
                noValidate
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <MyTextInput
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      labeltxt="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <MyTextInput
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      labeltxt="Last Name"
                      name="lastName"
                      autoComplete="lname"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <MyTextInput
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      labeltxt="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <MyTextInput
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      labeltxt="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <MyTextInput
                      variant="outlined"
                      required
                      fullWidth
                      id="userName"
                      labeltxt="User name"
                      name="userName"
                      autoComplete="userName"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <div id="my-radio-group">Gender</div>
                    <div role="group" aria-labelledby="my-radio-group">
                      <label>
                        <Field type="radio" name="gender" value="Male" />
                        Male
                      </label>
                      <label>
                        <Field type="radio" name="gender" value="Female" />
                        Female
                      </label>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <MyTextInput
                      variant="outlined"
                      required
                      fullWidth
                      id="address"
                      labeltxt="Address"
                      name="address"
                      autoComplete="address"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <MyTextInput
                      variant="outlined"
                      required
                      fullWidth
                      name="country"
                      labeltxt="Country"
                      type="country"
                      id="country"
                      autoComplete="country"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <MyTextInput
                      variant="outlined"
                      required
                      fullWidth
                      id="city"
                      labeltxt="City"
                      name="city"
                      autoComplete="city"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <MyTextInput
                      variant="outlined"
                      required
                      fullWidth
                      name="zip"
                      labeltxt="Zip"
                      type="zip"
                      id="zip"
                      autoComplete="zip"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MyTextInput
                      required
                      variant="outlined"
                      labeltxt="BirthDate"
                      name="birthDate"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </form>
      )}
    </Formik>
  );
};
