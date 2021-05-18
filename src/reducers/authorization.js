import * as types from '../actions/actionTypes';

const authUser = (state = [], action) => {
  switch (action.type) {
    case types.LOGGIN_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default authUser;
