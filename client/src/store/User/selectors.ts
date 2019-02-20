import { createSelector } from 'reselect';

import { UserState } from './reducer';

export const getUsers = (state: UserState) => state.users;

export const getUsersFilter = (state: UserState) => state.userFilter;

export const getFilteredTodos = createSelector(
  getUsers,
  getUsersFilter,
  (users, userFilter) => {
    switch (userFilter) {
      case 'ALL_USERS':
        return users
      case 'PREMIUM_USERS':
        return users.filter(u => !u.paid);
      default:
        return users;
    }
  }
);
