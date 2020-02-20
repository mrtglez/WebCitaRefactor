import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import React from 'react';
import injectSheet from 'react-jss';
/** STYLES **/

const classes = {
  main: {
    'background-color': 'white',
    padding: '20px',
  },
};

/** COMPONENT **/
const getSteps = () => {
  return ['Seleccionar centro', 'Seleccionar la categoría', 'Selecciona un servicio'];
};

const MainComponent = (props: any) => {
  const classes = props.classes;
  const steps = getSteps();
  const [activeStep, setActiveStep] = React.useState(0);
  const goNext = () => {
    setActiveStep(activeStep === steps.length - 1 ? activeStep : activeStep + 1);
  };
  const goPrev = () => {
    setActiveStep(activeStep === 0 ? activeStep : activeStep - 1);
  };
  return (
    <div className={classes.main}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Grid container direction="column" alignItems="stretch">
        <Grid container direction="row" justify="space-between">
          <Button
            variant="contained"
            color="primary"
            onClick={goPrev}
            style={{ visibility: !activeStep ? 'hidden' : undefined }}
          >
            Anterior
          </Button>
          <Button variant="contained" color="primary" onClick={goNext}>
            {activeStep === steps.length - 1 ? 'Enviar' : 'Siguiente'}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default injectSheet(classes)(MainComponent);
