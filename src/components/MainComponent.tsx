import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import GlobalState from '../state/globalState';
import { ActionTypes } from '../App';
/** STYLES **/
const classes = {
  main: {
    'background-color': 'white',
    padding: '20px',
  },
};

/** CONTAINER **/
interface MainComponentProps {
  activeStep: number;
  classes: any;
  setActiveStep: (arg0: number) => void;
}
const mapStateToProps = (state: GlobalState) => {
  return { activeStep: state.activeStep };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setActiveStep: (newStep: number) => {
    dispatch({ type: ActionTypes.ACTIVE_STEP_SETTER, payload: newStep });
  },
});

/** COMPONENT **/
const getSteps = () => {
  return ['Seleccionar centro', 'Seleccionar la categoría', 'Selecciona un servicio'];
};

const getStepContent = (step: number) => {
  switch (step) {
    case 0:
      return <Grid container direction="row" justify="space-between"></Grid>;

    default:
      break;
  }
};
const MainComponent = (props: MainComponentProps) => {
  const classes = props.classes;
  console.log(props);
  const steps = getSteps();

  const goNext = () => {
    if (props.activeStep === steps.length - 1) {
      alert('Simulación de envío');
    } else {
      props.setActiveStep(props.activeStep + 1);
    }
  };
  const goPrev = () => {
    props.setActiveStep(props.activeStep === 0 ? props.activeStep : props.activeStep - 1);
  };
  return (
    <div className={classes.main}>
      <Stepper activeStep={props.activeStep}>
        {steps.map(label => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Grid container direction="column" alignItems="stretch">
        {getStepContent(props.activeStep)}
        <Grid container direction="row" justify="space-between">
          <Button
            variant="contained"
            color="primary"
            onClick={goPrev}
            style={{ visibility: !props.activeStep ? 'hidden' : undefined }}
          >
            Anterior
          </Button>
          <Button variant="contained" color="primary" onClick={goNext}>
            {props.activeStep === steps.length - 1 ? 'Enviar' : 'Siguiente'}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(classes)(MainComponent));
