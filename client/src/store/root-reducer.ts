import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';

import { userReducer } from './User';

const rootReducer = combineReducers({
  users:userReducer
});

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
