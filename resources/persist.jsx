
import React from 'react';
import {
  applyMiddleware,
  createStore,
  compose,
  combineReducers,
} from 'redux';
import {
  ConnectedRouter,
  routerMiddleware,
} from 'react-router-redux';
import { Provider } from 'react-redux';
import {
  composeWithDevTools,
} from 'redux-devtools-extension';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import storage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/lib/storage/session';
import thunkMiddleware from 'redux-thunk';

import Container from './container.jsx';
import Reducer from './reducer.jsx';
import { clientMiddleware } from './middleware.jsx';



export default function() {

  const config = {
    key: 'root',
    storage,
  };
  const reducers = combineReducers({
    Reducer,
  });
  const store = createStore(
    persistReducer(config, reducers),
    composeWithDevTools(
      applyMiddleware(
        thunkMiddleware,
        clientMiddleware,
      )
    )
  );
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Container />
      </PersistGate>
    </Provider>
  );
}
