import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import MockDataDates from '../../../tools/MockDataDates';
import HoursToday from '../HoursToday';

test('Content from Expense matches snapshot', () => {
  const content = render(
    <HoursToday myHours={MockDataDates} weeklyPlayTime={15} />,
  );
  expect(content.container).toMatchSnapshot();
});
