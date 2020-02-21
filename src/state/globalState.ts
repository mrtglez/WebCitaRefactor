import { Action } from 'redux';

interface GlobalState {
  title: string;
  activeStep: number;
}

export default GlobalState;

export const initalState: GlobalState = { title: 'Cita Previa US', activeStep: 0 };

export interface AppAction extends Action {
  payload: number;
}
