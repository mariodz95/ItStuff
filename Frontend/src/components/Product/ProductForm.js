import React from "react";
import Container from "@material-ui/core/Container";
import { MyTextInput } from "../../shared/MyTextInput";
import { MyTextArea } from "../../shared/MyTextArea";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Formik } from "formik";
import Typography from "@material-ui/core/Typography";
import * as Yup from "yup";
import ImageUploader from "react-images-upload";
import { categories } from "../../shared/Categories";
import Select from "react-select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10, 3),
  },
}));

const ProductForm = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Formik
        initialValues={{ title: "", description: "", price: "" }}
        validationSchema={Yup.object({
          title: Yup.string().required("Required"),
          description: Yup.string().required("Required"),
          price: Yup.number().required("Required"),
          // category: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          props.addItem(values);
        }}
      >
        {(formik) => (
          <Container component="main" maxWidth="xs" className={classes.root}>
            <CssBaseline />
            <div>
              <Typography component="h1" variant="h5">
                Sell Item
              </Typography>
              <form onSubmit={formik.handleSubmit} noValidate>
                <MyTextInput
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  labeltxt="Title"
                  name="title"
                />
                <MyTextArea
                  name="description"
                  rows="6"
                  placeholder="Description."
                  style={{ width: 400 }}
                />
                <MyTextInput
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="price"
                  labeltxt="Price"
                  name="price"
                />
                <ImageUploader
                  withIcon={true}
                  buttonText="Choose image's"
                  onChange={props.onDrop}
                  imgExtension={[".jpg", ".png"]}
                  maxFileSize={15242880}
                  withPreview={true}
                />
                <Select
                  value={props.selectedOption}
                  options={categories}
                  onChange={props.handleChange}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.name}
                />{" "}
                <br />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  SELL ITEM
                </Button>
              </form>
            </div>
          </Container>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default ProductForm;
