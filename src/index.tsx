import React from 'react';

import Router from 'pages/Router';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import rootReducer from 'reduce';
import { createStore } from 'redux';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store = createStore(rootReducer);

root.render(
  <Provider store={store}>
    <Router />
  </Provider>,
);
