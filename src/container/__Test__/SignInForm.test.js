import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import configureStore from '../../configStore';
import SignInForm from '../SignInForm';

test('Profile will be render', () => {
  const store = configureStore();
  render(
    <Provider store={store}>
      <SignInForm />
    </Provider>,
  );
});
