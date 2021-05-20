import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CreateDate from '../util/CreateDate';
import TrackerStyle from '../styles/Expense.module.css';

const Expense = ({ expense }) => (
  <div className={TrackerStyle.card}>
    <div className={TrackerStyle.cardText}>
      <FontAwesomeIcon icon={faCreditCard} size="2x" className={TrackerStyle.credit} />
      <h4 className={TrackerStyle.expense}>{expense.category}</h4>
    </div>
    <div className={TrackerStyle.expenseProgress}>
      <h3 className={TrackerStyle.date}>
        {CreateDate(expense.day_of_expense, expense.month_of_expense, expense.year_of_expense)}
      </h3>
      <div style={{ width: '60px', height: '60px' }}>

        <CircularProgressbar
          value={expense.amount}
          text={`${expense.amount} euros`}
          maxValue={1000}
        />
      </div>
    </div>
  </div>
);

Expense.propTypes = {
  expense: PropTypes.instanceOf(Object).isRequired,
};

export default Expense;
