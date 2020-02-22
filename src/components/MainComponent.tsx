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
import { Categoria, Centro, Servicio } from '../interfaces';
import UniversityService from '../services/university.service';
import GlobalState from '../state/globalState';

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
interface FormGroup {
  centro?: string;
  categoria?: string;
  servicio?: string;
}

interface MainComponentState {
  formGroup: FormGroup;
}
class MainComponent extends React.Component<MainComponentProps, MainComponentState> {
  steps = ['Seleccionar centro', 'Seleccionar la categoría', 'Selecciona un servicio'];

  classes: any;

  universityService: UniversityService;

  centros: Centro[];
  categorias: Categoria[];
  servicios: Servicio[];

  constructor(props: MainComponentProps) {
    super(props);
    this.state = { formGroup: {} as FormGroup };
    this.classes = props.classes;

    this.universityService = UniversityService.getInstance();

    this.centros = [];
    this.categorias = [];
    this.servicios = [];

    this.universityService.getCentros().subscribe(x => (this.centros = x));
    this.universityService.getCategorias().subscribe(x => (this.categorias = x));
  }

  onValueChange(event: React.ChangeEvent<any>) {
    const formGroup = { ...this.state.formGroup };
    formGroup[event.target.name] = event.target.value;
    this.setState({ formGroup });
  }

  getStepContent(step: number) {
    switch (step) {
      case 0:
        return (
          <Grid container direction="row" justify="center">
            <FormControl className={this.classes.formControl}>
              <InputLabel style={{ width: '100%' }} id="centros-select-id">
                Centro de Estudios
              </InputLabel>
              <Select
                labelId="centros-select-id"
                name="centro"
                value={this.state.formGroup.centro || ''}
                onChange={e => this.onValueChange(e)}
              >
                {this.centros.map(centro => (
                  <MenuItem key={centro.id} value={centro.id}>
                    {centro.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        );
      case 1:
        return (
          <Grid container direction="row" justify="center">
            <FormControl className={this.classes.formControl}>
              <InputLabel style={{ width: '100%' }} id="categorias-select-id">
                Categoria de la Visita
              </InputLabel>
              <Select
                labelId="categorias-select-id"
                name="categoria"
                value={this.state.formGroup.categoria || ''}
                onChange={e => this.onValueChange(e)}
              >
                {this.categorias.map(categoria => (
                  <MenuItem key={categoria.id} value={categoria.id}>
                    {categoria.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        );
      case 2:
        return (
          <Grid container direction="row" justify="center">
            <FormControl className={this.classes.formControl}>
              <InputLabel style={{ width: '100%' }} id="servicios-select-id">
                Servicio de la Visita
              </InputLabel>
              <Select
                labelId="servicios-select-id"
                name="servicio"
                value={this.state.formGroup.servicio || ''}
                onChange={e => this.onValueChange(e)}
              >
                {this.servicios.map(servicio => (
                  <MenuItem key={servicio.id} value={servicio.id}>
                    {servicio.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        );
      case 3:
        return <Grid container direction="row" justify="space-between"></Grid>;

      default:
        break;
    }
  }
  goNext() {
    console.log(this.props.activeStep);
    if (this.props.activeStep === this.steps.length - 1) {
      alert('Simulación de envío');
    } else {
      if (this.props.activeStep === 1 && this.state.formGroup.categoria) {
        this.universityService.getServicios(this.state.formGroup.categoria).subscribe(x => {
          console.log(x);
          this.servicios = x;
        });
      }
      this.props.setActiveStep(this.props.activeStep + 1);
    }
  }
  goPrev() {
    this.props.setActiveStep(
      this.props.activeStep === 0 ? this.props.activeStep : this.props.activeStep - 1,
    );
  }
  isNextDisabled() {
    return (
      (this.props.activeStep === 0 && !this.state.formGroup.centro) ||
      (this.props.activeStep === 1 && !this.state.formGroup.categoria) ||
      (this.props.activeStep === 2 && !this.state.formGroup.servicio)
    );
  }

  render() {
    if (!this.centros) {
      return <span>Cargando...</span>;
    }
    return (
      <div className={this.classes.main}>
        <Stepper activeStep={this.props.activeStep}>
          {this.steps.map((label, index) => {
            return (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Grid container direction="column" alignItems="stretch">
          <div className={this.classes.stepperContent}>
            {' '}
            {this.getStepContent(this.props.activeStep)}
          </div>
          <Grid container direction="row" justify="space-between">
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.goPrev()}
              style={{ visibility: !this.props.activeStep ? 'hidden' : undefined }}
            >
              Anterior
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.goNext()}
              disabled={this.isNextDisabled()}
            >
              {this.props.activeStep === this.steps.length - 1 ? 'Enviar' : 'Siguiente'}
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(classes)(MainComponent));
