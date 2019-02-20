import { createStore, applyMiddleware, compose } from 'redux';
// import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './root-reducer';
// import rootEpic from './root-epic';

const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

function configureStore(initialState?: {}) {
  // configure middlewares
  // const middlewares = [createEpicMiddleware(rootEpic)];
  // compose enhancers
  const enhancer = composeEnhancers();
  // create store
  return createStore(rootReducer, initialState!, enhancer);
}

const store = configureStore();

export default store;
