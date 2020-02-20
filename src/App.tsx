import React from 'react';
import { Provider } from 'react-redux';
import { Action, createStore, Reducer } from 'redux';
import './App.css';
import WebFooter from './components/Footer';
import GlobalState, { initalState } from './state/globalState';
import WebHeader from './styledComponents/Header';
import MainComponent from './components/MainComponent';

const reducer: Reducer = (state: GlobalState, action: Action) => {
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
