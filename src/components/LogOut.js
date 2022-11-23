/** @format */

import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

export const LogOut = ({ setStep, setLogin, setData }) => {
  const navigate = useNavigate();
  const exit = () => {
    localStorage.clear();
    navigate('/login');
    setLogin(false);
    setStep(0);
    setData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      job: '',
      phoneNumber: '',
    });
  };
  return (
    <Button variant="contained" color="secondary" onClick={() => exit()}>
      Log Out
    </Button>
  );
};
