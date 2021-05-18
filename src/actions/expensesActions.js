import axios from 'axios';
import * as types from './actionTypes';

const url = 'http://localhost:4000/api/v1/expenses'

export const expensesLoadSuccess = (expenses) => ({
  type: types.EXPENSES_LOAD_SUCCESS,
  payload: expenses,
});

export const expensesLoadError = (expenses) => ({
  type: types.EXPENSES_LOAD_ERROR,
  payload: expenses,
});

export const getExpenses = () => (dispatch) => {
  const auth = localStorage.token;
  axios.get(url, {
    headers: { Authorization: `Bearer ${auth}` },
  }).then((response) => {
    dispatch(expensesLoadSuccess(response.data))
  }).catch((error) => {
    dispatch(expensesLoadError(error.response.data.error))
  })
}