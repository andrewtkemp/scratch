import { createStandardAction } from 'typesafe-actions';

import { User, UserFilter } from './models';

const ADD = '@@User/ADD';
const UPDATE = '@@User/UPDATE';
const DELETE = '@@User/DELETE';
const SHOW_PAID = "@@User/SHOW_PAID";

export const addUser = createStandardAction(ADD).map(
  (payload: { username: string, password:string }) => ({
    payload: {
      username:payload.username,
      password:payload.password,
      id: '_' + Math.random().toString(36).substr(2, 9),
      paid:false
    } as User,
  })
);

export const deleteUser = createStandardAction(DELETE)<{ id: string }>();

export const updateUser = createStandardAction(UPDATE)<{id:string, username:string, password:string}>();

export const showPaidUser = createStandardAction(SHOW_PAID)<UserFilter>();