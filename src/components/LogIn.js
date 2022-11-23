/** @format */

import './SecurityInfo.css';
import { React, useEffect, useState } from 'react';
import { ErrorMessage, useFormik } from 'formik';
import { TextField, Button } from '@material-ui/core';
import * as Yup from 'yup';
import { Route, Routes, BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';
import { Profile } from './Profile';


const loginInfo = {
  email: 'usergood1379@gmail.com',
  password: '12345678a',
};
export const LogIn = ({ info, setLogin, login }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    window.localStorage.setItem('isLogin', JSON.stringify(login));
  }, [login]);

  const checkInfo = (e) => {
    e.preventDefault();
    if (loginInfo.email === email && loginInfo.password === password) {
      navigate('/profile');
      setLogin(true);
      window.localStorage.setItem('isLogin', JSON.stringify(true));
    } else {
      setError('password or email is wrong!');
    }
  };
  return (
    <>
      <form className="form" onSubmit={checkInfo}>
        <TextField
          fullWidth
          variant="outlined"
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{ color: 'red' }}>{error}</div>
        <Button variant="contained" color="primary" type="submit">
          Sign in
        </Button>
      </form>
    </>
  );
};
