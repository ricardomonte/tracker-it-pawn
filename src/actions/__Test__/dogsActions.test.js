import * as types from '../actionTypes';
import MockData from '../../../tools/MockData';
import * as actionCreator from '../dogsActions';

test('Load dogs success', () => {
  const expectedAction = {
    type: types.DOGS_LOAD_SUCCESS,
    payload: MockData,
  };

  const action = actionCreator.dogsLoadSuccess(MockData);
  expect(action).toEqual(expectedAction);
});

test('Load one dog success', () => {
  const expectedAction = {
    type: types.DOG_LOAD_SUCCESS,
    payload: MockData[0],
  };

  const action = actionCreator.oneDogLoadSuccess(MockData[0]);
  expect(action).toEqual(expectedAction);
});

test('Update dog success', () => {
  const expectedAction = {
    type: types.DOG_UPDATED_SUCCESS,
    payload: MockData[0].name,
  };

  const action = actionCreator.dogUpdatedSuccess(MockData[0].name);
  expect(action).toEqual(expectedAction);
});

test('Create dog success', () => {
  const expectedAction = {
    type: types.DOG_CREATED_SUCCESS,
    payload: MockData[1],
  };

  const action = actionCreator.dogCreatedSuccess(MockData[1]);
  expect(action).toEqual(expectedAction);
});
