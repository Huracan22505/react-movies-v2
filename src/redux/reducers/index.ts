import { combineReducers } from 'redux';
import { rootReducer } from './root';

export const reducers = combineReducers({ root: rootReducer });

export type State = ReturnType<typeof reducers>;
