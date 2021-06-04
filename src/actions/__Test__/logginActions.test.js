import * as types from '../actionTypes';
import MockData from '../../../tools/MockData';
import * as actionCreator from '../logginActions';

test('Loggin user success', () => {
  const expectedAction = {
    type: types.LOGGIN_USER_SUCCESS,
    payload: MockData[2].name,
  };

  const action = actionCreator.logginUserSuccess(MockData[2].name);
  expect(action).toEqual(expectedAction);
});

test('Loggin success', () => {
  const expectedAction = {
    type: types.LOGGIN_SUCCESS,
    payload: MockData[1].name,
  };

  const action = actionCreator.logginSuccess(MockData[1].name);
  expect(action).toEqual(expectedAction);
});
