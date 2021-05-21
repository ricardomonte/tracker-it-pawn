import createdReducer from '../createdSuccess'
import { logginSuccess }  from '../../actions/logginActions';
import { expenseCreatedSuccess }  from '../../actions/expensesActions';
import { dogCreatedSuccess, dogUpdatedSuccess }  from '../../actions/dogsActions';
import { playHourCreatedSuccess }  from '../../actions/playHoursActions';

test('createdReducer will update state and return it', () => {
  const firstState = 'a';
  const userlogged = 'b';
  const action = logginSuccess(userlogged);
  const newState = createdReducer(firstState, action);

  expect(newState).toEqual('b');
  expect(newState).not.toEqual(firstState);
});

test('createdReducer will update state and return it', () => {
  const firstState = 'a';
  const expense = 'b';
  const action = expenseCreatedSuccess(expense);
  const newState = createdReducer(firstState, action);

  expect(newState).toEqual('b');
  expect(newState).not.toEqual(firstState);
});


test('createdReducer will update state and return it', () => {
  const firstState = 'a';
  const dog = 'b';
  const action = dogCreatedSuccess(dog);
  const newState = createdReducer(firstState, action);

  expect(newState).toEqual('b');
  expect(newState).not.toEqual(firstState);
});

test('createdReducer will update state and return it', () => {
  const firstState = 'a';
  const dog = 'b';
  const action = dogUpdatedSuccess(dog);
  const newState = createdReducer(firstState, action);

  expect(newState).toEqual('b');
  expect(newState).not.toEqual(firstState);
});

test('createdReducer will update state and return it', () => {
  const firstState = 'a';
  const hour = 'b';
  const action = playHourCreatedSuccess(hour);
  const newState = createdReducer(firstState, action);

  expect(newState).toEqual('b');
  expect(newState).not.toEqual(firstState);
});