/** @format */

import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button } from '@material-ui/core';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  name: Yup.string().required(),
  phoneNumber: Yup.string().length(11).required(),
  job: Yup.string().required(),
});

export const PersonalityInfo = ({ setData, data, next }) => {
  const onSubmit = (values) => {
    setData({
      ...data,
      name: values.name,
      phoneNumber: values.phoneNumber,
      job: values.job,
    });
    next();
  };

  const initialValues = {
    name: data.name,
    phoneNumber: data.phoneNumber,
    job: data.job,
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <>
      <form className="form" onSubmit={formik.handleSubmit}>
        <h1 className="security-header">Personality Info</h1>
        <TextField
          fullWidth
          variant="outlined"
          label="Name"
          name="name"
          {...formik.getFieldProps('name')}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Phone Number"
          name="phoneNumber"
          {...formik.getFieldProps('phoneNumber')}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Job"
          name="job"
          {...formik.getFieldProps('job')}
          error={formik.touched.job && Boolean(formik.errors.job)}
          helperText={formik.touched.job && formik.errors.job}
        />
        <Button variant="contained" color="primary" type="submit">
          Next
        </Button>
      </form>
    </>
  );
};
