import axios from 'axios';
import * as types from './actionTypes';

export const logginUserSuccess = (userlogged) => ({
  type: types.LOGGIN_SUCCESS,
  payload: userlogged,
});

export const logginUserError = (error) => ({
  type: types.LOGGIN_ERROR,
  payload: error,
});

export const logginUser = (user) => (dispatch) => {
  axios.post('http://localhost:4000/users/sign_in', {
    email: user.mail,
    password: user.password,
  }).then((response) => {
    localStorage.setItem('token', response.headers['access-token']);
    dispatch(logginUserSuccess(response.data));
  }).catch((e) => {
    dispatch(logginUserError(e.response.data.error));
  });
};

export const signUpUser = (user) => (dispatch) => {
  axios.post('http://localhost:4000/users/sign_up', {
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    password: user.password,
  }).then((response) => {
    localStorage.setItem('token', response.headers['access-token']);
    dispatch(logginUserSuccess(response.data));
  }).catch((e) => {
    dispatch(logginUserError(e.response.data.error));
  });
};

export const checkTokenUser = () => (dispatch) => {
  const auth = localStorage.token;
  if (auth) {
    axios.get('http://localhost:4000/api/v1/profile', {
      headers: { Authorization: `Bearer ${auth}` },
    }).then((response) => {
      dispatch(logginUserSuccess(response.data));
    }).catch((e) => {
      dispatch(logginUserError(e));
    });
  } else {
    dispatch(logginUserError('No token provide'));
  }
};
