import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../reducers';
import { loadState, saveState } from './localStorage.js';

const KEY = 'state';

const persistedState = loadState(KEY);

const store = createStore(reducers, persistedState, applyMiddleware(reduxThunk));

store.subscribe(() => {
  const stateToSave = store.getState();
  saveState(stateToSave, KEY);
});

export default store;
