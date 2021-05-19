import * as types from '../actions/actionTypes';

const errorReducer = (state = [], action) => {
  switch (action.type) {
    case types.LOGGIN_ERROR:
      return { loggingError: action.payload };
    case types.EXPENSES_LOAD_ERROR:
      return { expensesError: action.payload };
    case types.EXPENSE_CREATED_ERROR:
      return { expenseError: action.payload };
    case types.DOGS_LOAD_ERROR:
      return { dogsError: action.payload };
    case types.DOG_CREATED_ERROR:
      return { dogError: action.payload };
    default:
      return state;
  }
};

export default errorReducer;
