import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import configureStore from '../../configStore';
import DogForm from '../DogForm';

test('DogForm will be render', () => {
  const store = configureStore();
  render(
    <Provider store={store}>
      <BrowserRouter>
        <DogForm />
      </BrowserRouter>
    </Provider>,
  );
});
