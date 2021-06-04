import * as types from '../actionTypes';
import MockData from '../../../tools/MockData';
import * as actionCreator from '../playHoursActions';

test('Load play hours success', () => {
  const expectedAction = {
    type: types.PLAYHOUR_DOG_LOAD_SUCCESS,
    payload: MockData,
  };

  const action = actionCreator.playHourDogLoadSuccess(MockData);
  expect(action).toEqual(expectedAction);
});

test('Create hour success', () => {
  const expectedAction = {
    type: types.PLAYHOUR_CREATED_SUCCESS,
    payload: MockData[1].name,
  };

  const action = actionCreator.playHourCreatedSuccess(MockData[1].name);
  expect(action).toEqual(expectedAction);
});
