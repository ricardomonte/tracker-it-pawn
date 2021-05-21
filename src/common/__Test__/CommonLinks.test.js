import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CommonLinks from '../CommonLinks';

test('Content from About matches snapshot', () => {
  const content = render(
    <BrowserRouter>
      <CommonLinks />
    </BrowserRouter>
  );
  expect(content.container).toMatchSnapshot();
});