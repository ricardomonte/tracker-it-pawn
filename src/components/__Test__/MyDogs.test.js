import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MockData from '../../../tools/MockData';
import MyDogs from '../MyDogs';

test('Content from Expense matches snapshot', () => {
  const content = render(
    <BrowserRouter>
      <MyDogs dog={MockData[0]} />
    </BrowserRouter>
  );
  expect(content.container).toMatchSnapshot();
});