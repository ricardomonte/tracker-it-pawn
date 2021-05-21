import axios from 'axios';
import * as types from './actionTypes';

const url = 'https://tracker-tracker-api-fp.herokuapp.com/api/v1/expenses';

export const expenseCreatedSuccess = (expenses) => ({
  type: types.EXPENSE_CREATED_SUCCESS,
  payload: expenses,
});

export const expensesLoadSuccess = (expenses) => ({
  type: types.EXPENSES_LOAD_SUCCESS,
  payload: expenses,
});

export const expensesLoadError = (expenses) => ({
  type: types.EXPENSES_LOAD_ERROR,
  payload: expenses,
});

export const expenseCreatedError = (expenses) => ({
  type: types.EXPENSE_CREATED_ERROR,
  payload: expenses,
});

export const getExpenses = () => (dispatch) => {
  const auth = localStorage.token;
  axios.get(url, {
    headers: { Authorization: `Bearer ${auth}` },
  }).then((response) => {
    dispatch(expensesLoadSuccess(response.data));
  }).catch((error) => {
    dispatch(expensesLoadError(error.response.data.error));
  });
};

export const createExpense = (expenses) => (dispatch) => {
  const auth = localStorage.token;
  const data = {
    category: expenses.category,
    detail: expenses.detail,
    amount: expenses.amount,
    date_payment: expenses.datePayment,
  };

  axios.post(url, data, { headers: { Authorization: `Bearer ${auth}` } }).then((response) => {
    dispatch(expenseCreatedSuccess(`${response.data.category} created`));
  }).catch((error) => {
    dispatch(expenseCreatedError(error.response.data.error));
  });
};
