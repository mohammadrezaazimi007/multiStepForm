/** @format */

import './SecurityInfo.css';
import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button } from '@material-ui/core';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(5),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const SecurityInfo = ({ next, prev, setData, data }) => {
  const onSubmit = (values) => {
    setInputDate(values);
    next();
  };
  const initialValues = {
    email: data.email,
    password: data.password,
    confirmPassword: data.confirmPassword,
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const setInputDate = (values) => {
    setData({
      ...data,
      ...values,
    });
  };
  return (
    <>
      <form className="form" onSubmit={formik.handleSubmit}>
        <h1 className="security-header">Security Info</h1>
        <TextField
          fullWidth
          variant="outlined"
          label="Email"
          name="email"
          {...formik.getFieldProps('email')}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Password"
          name="password"
          {...formik.getFieldProps('password')}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Confirm Password"
          name="confirmPassword"
          {...formik.getFieldProps('confirmPassword')}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        <Button variant="contained" color="primary" type="submit">
          Next
        </Button>
        <Button
          onClick={() => {
            prev();
            setInputDate(formik.values);
          }}
          variant="contained"
          color="secondary"
          type="button"
        >
          Prev
        </Button>
      </form>
    </>
  );
};
