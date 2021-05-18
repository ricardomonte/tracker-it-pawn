import * as types from '../actions/actionTypes';

const errorReducer = (state = [], action) => {
  switch (action.type) {
    case types.LOGGIN_ERROR:
      return { loggingError: action.payload };
    case types.EXPENSES_LOAD_ERROR:
      return { expensesError: action.payload };
    default:
      return state;
  }
};

export default errorReducer;
