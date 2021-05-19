import axios from 'axios';
import * as types from './actionTypes';

const url = 'http://localhost:4000/api/v1/dogs';

export const dogCreatedSuccess = (dog) => ({
  type: types.DOG_CREATED_SUCCESS,
  payload: dog,
});

export const dogsLoadSuccess = (dogs) => ({
  type: types.DOGS_LOAD_SUCCESS,
  payload: dogs,
});

export const dogsLoadError = (dogs) => ({
  type: types.DOGS_LOAD_ERROR,
  payload: dogs,
});

export const dogCreatedError = (dog) => ({
  type: types.DOG_CREATED_ERROR,
  payload: dog,
});

export const getDogs = () => (dispatch) => {
  const auth = localStorage.token;
  axios.get(url, {
    headers: { Authorization: `Bearer ${auth}` },
  }).then((response) => {
    dispatch(dogsLoadSuccess(response.data));
  }).catch((error) => {
    dispatch(dogsLoadError(error.response.data.error));
  });
};

export const createDog = (dogs) => (dispatch) => {
  const auth = localStorage.token;
  const data = {
    name: dogs.name,
    breed: dogs.breed,
  };

  axios.post(url, data, { headers: { Authorization: `Bearer ${auth}` } }).then((response) => {
    dispatch(dogCreatedSuccess(`${response.data.name} created`));
  }).catch((error) => {
    dispatch(dogCreatedError(error.response.data.error));
  });
};
