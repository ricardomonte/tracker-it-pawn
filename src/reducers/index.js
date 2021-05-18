import { combineReducers } from 'redux';
import authenticatedUser from './authorization';
import manageErr from './manageErrors';
import expenses from './expenses';

const rootReducer = combineReducers({
  authenticatedUser,
  expenses,
  manageErr,
});

export default rootReducer;
