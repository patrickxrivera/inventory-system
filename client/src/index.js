import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { AppView } from './components/App';
import store from './store';

render(
  <Provider store={store}>
    <AppView />
  </Provider>,
  document.getElementById('root')
);
