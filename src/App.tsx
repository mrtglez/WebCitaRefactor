import React from 'react';
import { Provider } from 'react-redux';
import { Action, createStore, Reducer } from 'redux';
import './App.css';
import WebFooter from './components/Footer';
import GlobalState, { initalState } from './state/globalState';
import WebHeader from './styledComponents/Header';

const reducer: Reducer = (state: GlobalState, action: Action) => {
  return state;
};

const store = createStore(reducer, initalState);

function App() {
  return (
    <Provider store={store}>
      <div className="contenedor_gris">
        <WebHeader></WebHeader>

        <WebFooter></WebFooter>
      </div>
    </Provider>
  );
}

export default App;
