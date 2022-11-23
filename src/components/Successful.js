/** @format */

import { React, useEffect } from 'react';
import {LogIn} from './LogIn';
import { CheckCircle } from '@material-ui/icons';
import { CircularProgress } from '@material-ui/core';
export const Successful = ({ next }) => {
  useEffect(() => {
    setTimeout(() => {
      next();
    }, 2000);
  }, []);

  return (
    <div className="successfull">
      <CheckCircle style={{ fontSize: '4rem', color: 'green' }} />
      <p>Thank you for registering on our website </p>
      <p>Now you can sign in to your account</p>
      <CircularProgress />
    </div>
  );
};
