import React from 'react';
import PropTypes from 'prop-types';

const Expense = ({ expense }) => (
  <>
    <h4>{expense.category}</h4>
  </>
);

Expense.propTypes = {
  expense: PropTypes.instanceOf(Object).isRequired,
};

export default Expense;
