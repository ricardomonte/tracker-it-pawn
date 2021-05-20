import { combineReducers } from 'redux';
import authenticatedUser from './authorization';
import manageErr from './manageErrors';
import expenses from './expenses';
import dogs from './dogs';
import oneDog from './oneDog';
import createdReducer from './createdSuccess';

const rootReducer = combineReducers({
  authenticatedUser,
  expenses,
  dogs,
  oneDog,
  createdReducer,
  manageErr,
});

export default rootReducer;
