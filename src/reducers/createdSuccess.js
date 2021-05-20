import * as types from '../actions/actionTypes';

const createdReducer = (state = [], action) => {
  switch (action.type) {
    case types.LOGGIN_SUCCESS:
      return action.payload;
    case types.EXPENSE_CREATED_SUCCESS:
      return action.payload;
    case types.DOG_CREATED_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default createdReducer;
