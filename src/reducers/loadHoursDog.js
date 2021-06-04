import * as types from '../actions/actionTypes';

const HoursDog = (state = [], action) => {
  switch (action.type) {
    case types.PLAYHOUR_DOG_LOAD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default HoursDog;
