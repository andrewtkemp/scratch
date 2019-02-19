import { action } from 'typesafe-actions';

import {Info, FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR} from "./types";


export const fetchRequest = () => action(FETCH_REQUEST);
export const fetchSuccess = (data:any) => action(FETCH_SUCCESS, data);
export const fetchError = (message:string) => action(FETCH_ERROR, message);