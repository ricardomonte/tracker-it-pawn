import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import TrackerStyle from '../styles/ExpenseMonthly.module.css';

const ExpenseChart = ({ expense }) => {
  const date = new Date();
  const currentMonth = date.getMonth();
  const strMonth = (currentMonth + 1).toString();
  const monthlyExpenses = expense.filter((element) => (
    element.month_of_expense === strMonth));
  const total = monthlyExpenses.reduce((total, element) => (total + element.amount), 0);

  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'October', 'Nov', 'Dec'];
  return (
    <div className={TrackerStyle.container}>
      <h3>{`Expenses in ${month[currentMonth]}`}</h3>
      <CircularProgressbar
        value={total}
        text={`${total} euros`}
        maxValue={1000}
      />
    </div>
  );
};

ExpenseChart.propTypes = {
  expense: PropTypes.instanceOf(Object).isRequired,
};

export default ExpenseChart;
