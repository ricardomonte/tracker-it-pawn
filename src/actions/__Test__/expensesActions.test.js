import * as types from '../actionTypes';
import MockData from '../../../tools/MockData';
import * as actionCreator from '../expensesActions';

test('Create expenses success', () => {
  const expectedAction = {
    type: types.EXPENSE_CREATED_SUCCESS,
    payload: MockData[0],
  };

  const action = actionCreator.expenseCreatedSuccess(MockData[0]);
  expect(action).toEqual(expectedAction);
});

test('Load expenses success', () => {
  const expectedAction = {
    type: types.EXPENSES_LOAD_SUCCESS,
    payload: MockData,
  };

  const action = actionCreator.expensesLoadSuccess(MockData);
  expect(action).toEqual(expectedAction);
});