import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import configureStore from '../../configStore';
import OneDog from '../OneDog';

test('OneDog will be render', () => {
  const store = configureStore();
  render(
    <Provider store={store}>
      <BrowserRouter>
        <OneDog match={{ params: { id: 39034 } }} />
      </BrowserRouter>
    </Provider>,
  );
});
