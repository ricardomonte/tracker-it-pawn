import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('Content from About matches snapshot', () => {
  const content = render(<Header />);
  expect(content.container).toMatchSnapshot();
  expect(screen.getByText('Track-It-Pawn')).toBeInTheDocument();
});