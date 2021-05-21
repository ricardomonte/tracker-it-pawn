import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import configureStore from '../../configStore';
import Profile from '../Profile';

test('Profile will be render', () => {
  const store = configureStore();
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    </Provider>,
  );
});