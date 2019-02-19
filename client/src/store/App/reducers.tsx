import { Reducer } from 'redux'
import { AppState, FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from './types';

const initialState: AppState = {
    compiler: "Typescript",
    framework: "ReactJS",
    bundler: "Webpack"
}

const reducer: Reducer<AppState> = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST: {
            return { ...state }
        }
        case FETCH_SUCCESS: {
            console.log(action.payload);
            return {...state, compiler:action.payload.compiler}
        }
        case FETCH_ERROR: {
            return { ...state }
        }
        default: {
            return state
        }

    }
}

export { reducer as appReducer }