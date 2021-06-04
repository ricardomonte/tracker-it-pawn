import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import configureStore from '../../configStore';
import SignUpForm from '../SignUpForm';

test('Profile will be render', () => {
  const store = configureStore();
  render(
    <Provider store={store}>
      <SignUpForm />
    </Provider>,
  );
});
