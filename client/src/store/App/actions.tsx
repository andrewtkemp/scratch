import { action } from 'typesafe-actions';

import {Info, FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR} from "./types";


export const fetchRequest = () => action(FETCH_REQUEST);
export const fetchSuccess = (data:Info) => action(FETCH_SUCCESS);
export const fetchError = (message:string) => action(FETCH_ERROR);