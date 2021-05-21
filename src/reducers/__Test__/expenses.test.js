import expenses from '../expenses';
import { expensesLoadSuccess }  from '../../actions/expensesActions';

test('authUser will update state and return it', () => {
  const firstState = 'a';
  const expense = 'b';
  const action = expensesLoadSuccess(expense);
  const newState = expenses(firstState, action);

  expect(newState).toEqual('b');
  expect(newState).not.toEqual(firstState);
});