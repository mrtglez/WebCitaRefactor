import { FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ActionTypes } from '../App';
import UniversityService from '../services/university.service';
import GlobalState from '../state/globalState';
import { Centro } from '../interfaces';

/** STYLES **/
const classes = {
  main: {
    'background-color': 'white',
    padding: '20px',
  },
  stepperContent: {
    marginBottom: '20px',
  },
  formControl: {
    width: '50%',
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

const MainComponent = (props: MainComponentProps) => {
  const universityService = UniversityService.getInstance();
  let centros: Centro[] = [];
  universityService.getCentros().subscribe(x => (centros = x));

  const { classes, activeStep, setActiveStep } = props;

  const steps = ['Seleccionar centro', 'Seleccionar la categoría', 'Selecciona un servicio'];
  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Grid container direction="row" justify="center">
            <FormControl className={classes.formControl}>
              <InputLabel style={{ width: '100%' }} id="centros-select-id">
                Centro de Estudios
              </InputLabel>
              <Select labelId="centros-select-id">
                {centros.map(centro => (
                  <MenuItem value={centro.id}>{centro.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        );
      case 1:
        return (
          <Grid container direction="row" justify="center">
            <FormControl className={classes.formControl}>
              <InputLabel style={{ width: '100%' }} id="categorias-select-id">
                Centro de Estudios
              </InputLabel>
              <Select labelId="categorias-select-id">
                {centros.map(centro => (
                  <MenuItem value={centro.id}>{centro.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        );
      case 2:
        return (
          <Grid container direction="row" justify="space-between">
            <span>Selecciona 3</span>
          </Grid>
        );
      case 3:
        return <Grid container direction="row" justify="space-between"></Grid>;

      default:
        break;
    }
  };
  const goNext = () => {
    if (activeStep === steps.length - 1) {
      alert('Simulación de envío');
    } else {
      setActiveStep(activeStep + 1);
    }
  };
  const goPrev = () => {
    setActiveStep(activeStep === 0 ? activeStep : activeStep - 1);
  };
  return (
    <div className={classes.main}>
      <Stepper activeStep={activeStep}>
        {steps.map(label => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Grid container direction="column" alignItems="stretch">
        <div className={classes.stepperContent}> {getStepContent(activeStep)}</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(classes)(MainComponent));
