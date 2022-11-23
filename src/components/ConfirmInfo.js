/** @format */

import { React, useRef } from 'react';
import Container from '@material-ui/core/Container';
import Acordion from '@material-ui/core/Accordion';
import AcordionSummery from '@material-ui/core/AccordionSummary';
import AcordionDetail from '@material-ui/core/AccordionDetails';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

export const ConfirmInfo = ({
  data,
  setData,
  next,
  prev,
  setStep,
  setInfo,
  info,
}) => {
  const { name, phoneNumber, job, email, password, confirmPassword } = data;
  const submitConfirm = (e) => {
    e.preventDefault();
    setInfo([...info, data]);
 /*    setData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      job: '',
      phoneNumber: '',
    }); */
    next();
  };
  return (
    <>
      <form onSubmit={submitConfirm}>
        <Container
          style={{ marginTop: '100px', maxWidth: '450px' }}
          maxWidth="sm"
        >
          <h1 style={{ textAlign: 'center' }}>Confirm Info</h1>
          {RenderAcoordian(
            'Personal Info',
            [{ Name: name }, { 'Phone Number': phoneNumber }, { job: job }],
            setStep,
            0
          )}
          {RenderAcoordian(
            'Security Info',
            [
              { Emial: email },
              { Password: password },
              { 'Confirm Password': confirmPassword },
            ],
            setStep,
            1
          )}
          <Button
            style={{ marginTop: '30px' }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <Button
            style={{ marginTop: '10px' }}
            type="button"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={() => prev()}
          >
            Prev
          </Button>
        </Container>
      </form>
    </>
  );
};

const RenderAcoordian = (summary, details, setStep, step) => {
  return (
    <Acordion>
      <AcordionSummery>{summary}</AcordionSummery>
      <AcordionDetail>
        <div>
          {details.map((data, index) => {
            const objKey = Object.keys(data)[0];
            const objValue = data[Object.keys(data)[0]];

            return (
              <ListItemText key={index}>
                <b>{objKey}: </b>
                {objValue}
              </ListItemText>
            );
          })}
          <IconButton onClick={() => setStep(step)}>
            <EditIcon />
          </IconButton>
        </div>
      </AcordionDetail>
    </Acordion>
  );
};
