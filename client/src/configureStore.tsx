// ./src/configureStore.ts
import { Store, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
// Import the state interface and our combined reducers/sagas.
import { ApplicationState, rootReducer } from './store'

const composeEnhancers = composeWithDevTools({})
const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk)))


export default store;