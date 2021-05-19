import * as types from '../actions/actionTypes';

const createdReducer = (state = [], action) => {
  switch (action.type) {
    case types.EXPENSE_CREATED_SUCCESS:
      return { expenseSuccess: action.payload };
    case types.DOG_CREATED_SUCCESS:
      return { dogSuccess: action.payload };
    default:
      return state;
  }
};

export default createdReducer;
