/** @format */

import { React, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';

export const Profile = ({ next, login}) => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLogin = window.localStorage.getItem('isLogin');
    if (!isLogin) {
      navigate('/login');
    }
  });
  return (
    <Link style={{textDecoration:'none'}} to={'/multistep-form'}>
      <Button variant="contained" color="primary">
        MultiStep Form
      </Button>
    </Link>
  );
};
