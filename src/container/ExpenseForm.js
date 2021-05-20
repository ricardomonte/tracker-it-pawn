import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createExpense } from '../actions/expensesActions';

const useDidUpdate = (callback, deps) => {
  const hasMount = useRef(false);

  useEffect(() => {
    if (hasMount.current) {
      callback();
    } else {
      hasMount.current = true;
    }
  }, deps);
};

const ExpenseForm = ({ expenseCreate, expenseSuccess }) => {
  const [expense, setExpense] = useState({
    category: '',
    detail: '',
    amount: '',
    datePayment: '',
  });

  const [invalidForm, setInvalidform] = useState(false);

  const history = useHistory();

  const toProfile = () => {
    history.push('/profile');
  };

  useDidUpdate(() => {
    toProfile();
  }, [expenseSuccess]);

  const handleChange = (event) => {
    const updateExpense = { ...expense, [event.target.name]: event.target.value };
    setExpense(updateExpense);
  };

  const handleValidation = (event) => {
    if (expense.category === '' || expense.detail === '' || expense.amount === '') {
      setInvalidform(true);
      return;
    }
    event.preventDefault();
    const amountNumeric = parseInt(expense.amount, 10);
    setExpense({ ...expense, amount: amountNumeric });
    expenseCreate(expense);
  };

  const handleSpan = () => {
    setInvalidform(false);
  };

  return (
    <div>
      <form>
        <label htmlFor="category">
          Category:
          <input id="category" type="text" value={expense.category} name="category" onChange={handleChange} placeholder="E.g. Food" />
        </label>
        <label htmlFor="detail">
          Detail:
          <input id="detail" type="text" value={expense.detail} name="detail" onChange={handleChange} placeholder="E.g. Buy food for fido" />
        </label>
        <label htmlFor="amount">
          Amount:
          <input id="amount" type="number" value={expense.amount} name="amount" onChange={handleChange} />
        </label>
        <label htmlFor="datePayment">
          Amount:
          <input id="datePayment" type="date" value={expense.datePayment} name="datePayment" onChange={handleChange} />
        </label>
        <button type="submit" onClick={handleValidation}>Submit</button>
      </form>
      {
      invalidForm
        ? <div onMouseOver={handleSpan} onFocus={handleSpan}>invalid formw</div>
        : <div />
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenseSuccess: state.createdReducer,
});

const mapDispatchToProps = (dispatch) => ({
  expenseCreate: (expense) => dispatch(createExpense(expense)),
});

ExpenseForm.propTypes = {
  expenseCreate: PropTypes.func.isRequired,
  expenseSuccess: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
