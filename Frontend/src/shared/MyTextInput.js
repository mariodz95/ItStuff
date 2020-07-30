import React from "react";
import TextField from "@material-ui/core/TextField";
import { useField } from "formik";

export const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <TextField {...field} {...props} label={props.labeltxt} />
      {meta.touched && meta.error ? (
        <p className="error">{meta.error}</p>
      ) : null}
    </>
  );
};
