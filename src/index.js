import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import mesaReducer from './components/Mesa/mesaReducer';
import snackbarReducer from './utils/SnackbarReducer';

const store = configureStore({
  reducer: {
    mesas: mesaReducer,
    snackbar: snackbarReducer,
  }
});

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
