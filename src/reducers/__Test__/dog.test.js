import dog from '../dogs';
import { dogsLoadSuccess }  from '../../actions/dogsActions';

test('authUser will update state and return it', () => {
  const firstState = 'a';
  const dogs = 'b';
  const action = dogsLoadSuccess(dogs);
  const newState = dog(firstState, action);

  expect(newState).toEqual('b');
  expect(newState).not.toEqual(firstState);
});