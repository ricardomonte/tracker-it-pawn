import * as types from '../actions/actionTypes';

const dogs = (state = [], action) => {
  switch (action.type) {
    case types.DOGS_LOAD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default dogs;
