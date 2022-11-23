/** @format */

import React from 'react';
import { LogOut } from './LogOut';
export const ThankYou = ({setLogin, setStep,setData}) => {
  return (
    <>
      <LogOut setStep={setStep} setLogin={setLogin} setData={setData} />
      <div>
        <p
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '250px',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          Thanks for Entering your information
        </p>
      </div>
    </>
  );
};
