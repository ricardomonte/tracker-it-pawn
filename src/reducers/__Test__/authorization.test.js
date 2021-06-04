import authUser from '../authorization';
import { logginUserSuccess } from '../../actions/logginActions';

test('authUser will update state and return it', () => {
  const firstState = 'a';
  const newGame = 'b';
  const action = logginUserSuccess(newGame);
  const newState = authUser(firstState, action);

  expect(newState).toEqual('b');
  expect(newState).not.toEqual(firstState.filter);
});
