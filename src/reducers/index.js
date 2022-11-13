import { combineReducers } from 'redux';

import user from './user';
import sheet from './sheet';

export const reducers = combineReducers({ user, sheet });