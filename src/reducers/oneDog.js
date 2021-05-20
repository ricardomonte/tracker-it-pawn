import * as types from '../actions/actionTypes';

const oneDog = (state = [], action) => {
  switch (action.type) {
    case types.DOG_LOAD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default oneDog;
