/** @format */

import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
export const Home = () => {
  console.log('home is render');
  return (
    <>
      <Link style={{textDecoration:'none'}} to={"/login"}>
        <Button variant="contained" color="primary">
          click for going tsadfadsfo login page
        </Button>
      </Link>
    </>
  );
};
