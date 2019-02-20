import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';

import { User } from './models';
import * as user from './actions';

export type UserAction = ActionType<typeof user>;

export type UserState = Readonly<{
  users:User[]
}>;

export default combineReducers<UserState, UserAction>({
  users:(state = [], action) =>{
    switch(action.type){
      case getType(user.addUser):
      return [...state, action.payload];
      case getType(user.updateUser):
      return state.map(
        user =>
        user.id === action.payload.id
        ? {...user, username:action.payload.username, password:action.payload.password}
        : user
      )
      case getType(user.deleteUser):
      return state.filter(user => user.id !== action.payload.id);
      default:
      return state;
    }
  }
});
