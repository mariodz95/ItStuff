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

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

const listCategories = categories.map((category) => <li>{category.name}</li>);
const options = categories;

const ProductForm = (props) => {
  return (
    <React.Fragment>
      {console.log("test", options)}{" "}
      <Formik
        initialValues={{ title: "", description: "", price: "" }}
        validationSchema={Yup.object({
          title: Yup.string().required("Required"),
          description: Yup.string().required("Required"),
          price: Yup.number().required("Required"),
        })}
        onSubmit={(values) => {
          props.addItem(values);
        }}
      >
        {(formik) => (
          <Container component="main" maxWidth="xs">
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
                <Select
                  value={props.selectedOption}
                  onChange={props.handleChange}
                  options={options}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.name}
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