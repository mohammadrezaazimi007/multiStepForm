/** @format */

import { useState, useEffect } from 'react';
import { SecurityInfo } from './components/SecurityInfo';
import { PersonalityInfo } from './components/PersonalityInfo';
import { ConfirmInfo } from './components/ConfirmInfo';
import { Successful } from './components/Successful';
import { LogIn } from './components/LogIn';
import { Profile } from './components/Profile';
import { MultiStepForm } from './components/MultiStepForm';
import { Home } from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { LogOut } from './components/LogOut';

function App() {
  let [info, setInfo] = useState([]);
  const [step, setStep] = useState(0);
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    job: '',
    phoneNumber: '',
  });

  const next = () => {
    setStep(step + 1);
  };
  const prev = () => {
    setStep(step - 1);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/multistep-form"
          element={
            <MultiStepForm
              data={data}
              step={step}
              next={() => next()}
              prev={() => prev()}
              setStep={setStep}
              setData={(data) => setData(data)}
              setInfo={(info) => setInfo(info)}
              info={info}
              login={login}
              setLogin={setLogin}
            />
          }
        />
        <Route
          path="/login"
          element={<LogIn info={info} setLogin={setLogin} login={login} />}
        />
        <Route
          path="/profile"
          element={
            <Profile
              next={() => next()}
              login={login}
              setLogin={setLogin}
              setStep={setStep}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
