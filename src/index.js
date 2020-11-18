import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import store from './store'
import { Provider } from 'react-redux'

const app = (
  <Provider store={store}>
      <App />
  </Provider>
)


ReactDOM.render(app, document.getElementById("root"));
reportWebVitals();
