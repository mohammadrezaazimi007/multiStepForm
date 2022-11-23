/** @format */

import { React, useEffect } from 'react';
import { PersonalityInfo } from './PersonalityInfo';
import { SecurityInfo } from './SecurityInfo';
import { ConfirmInfo } from './ConfirmInfo';
import { Successful } from './Successful';
import { ThankYou } from './ThankYou';
import { LogIn } from './LogIn';
import { useNavigate } from 'react-router-dom';

export const MultiStepForm = ({
  step,
  data,
  setData,
  setStep,
  setInfo,
  info,
  login,
  setLogin
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLogin = window.localStorage.getItem('isLogin');
    if (!isLogin) {
      navigate('/login');
    }
  });
  const next = () => {
    setStep(step + 1);
  };
  const prev = () => {
    setStep(step - 1);
  };
  switch (step) {
    case 0: {
      return <PersonalityInfo next={next} data={data} setData={setData} />;
    }
    case 1: {
      return (
        <SecurityInfo
          data={data}
          setData={setData}
          next={() => next()}
          prev={() => prev()}
        />
      );
    }
    case 2: {
      return (
        <ConfirmInfo
          setStep={setStep}
          data={data}
          setData={setData}
          next={() => next()}
          prev={() => prev()}
          step={step}
          setInfo={setInfo}
          info={info}
        />
      );
    }

    case 3: {
      return <Successful next={() => next()} />;
    }
    case 4: {
      return <ThankYou setStep={setStep} setLogin={setLogin} setData={setData} />
    }
    default: {
      return <div>default</div>;
    }
  }
};
