import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import MockData from '../../../tools/MockData';
import ExpenseChart from '../ExpenseChart';

test('Content from ExpenseChart matches snapshot', () => {
  const content = render(<ExpenseChart expense={MockData} />);
  expect(content.container).toMatchSnapshot();
});
