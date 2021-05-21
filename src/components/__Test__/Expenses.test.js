import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import MockData from '../../../tools/MockData';
import Expense from '../Expense';

test('Content from Expense matches snapshot', () => {
  const content = render(<Expense expense={MockData[0]} />);
  expect(content.container).toMatchSnapshot();
});
