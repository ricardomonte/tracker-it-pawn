import HoursDog from '../loadHoursDog';
import { playHourDogLoadSuccess }  from '../../actions/playHoursActions';

test('authUser will update state and return it', () => {
  const firstState = 'a';
  const hour = 'b';
  const action = playHourDogLoadSuccess(hour);
  const newState = HoursDog(firstState, action);

  expect(newState).toEqual('b');
  expect(newState).not.toEqual(firstState);
});