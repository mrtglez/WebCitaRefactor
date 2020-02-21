import React from 'react';
import { Provider } from 'react-redux';
import { createStore, Reducer } from 'redux';
import './App.css';
import WebFooter from './components/Footer';
import MainComponent from './components/MainComponent';
import GlobalState, { AppAction, initalState } from './state/globalState';
import WebHeader from './styledComponents/Header';

export enum ActionTypes {
  ACTIVE_STEP_SETTER,
}

const reducer: Reducer<any, AppAction> = (state: GlobalState, action: AppAction) => {
  switch (action.type) {
    case ActionTypes.ACTIVE_STEP_SETTER:
      return { ...state, activeStep: action.payload };

    default:
      break;
  }
  return state;
};

const store = createStore(reducer, initalState);

function App() {
  return (
    <Provider store={store}>
      <div className="contenedor_gris">
        <WebHeader></WebHeader>
        <MainComponent></MainComponent>
        <WebFooter></WebFooter>
      </div>
    </Provider>
  );
}

export default App;
