import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MockData from '../../../tools/MockData';
import PlayTimeForm from '../PlayTimeForm';

test('Content from PlayTimeForm matches snapshot', () => {
  const content = render(<PlayTimeForm id={(MockData[0].id).toString()} UpdatePlay={jest.fn()} />);
  expect(content.container).toMatchSnapshot();
  expect(screen.getByLabelText('How many hours weekly do you spend playing with your dog (aprox):')).toBeInTheDocument();
});
