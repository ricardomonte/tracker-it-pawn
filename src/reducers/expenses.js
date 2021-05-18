import * as types from '../actions/actionTypes';

const expenses = (state = [], action) => {
  switch (action.type) {
    case types.EXPENSES_LOAD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default expenses;