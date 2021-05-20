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

export const oneDogLoadError = (dogs) => ({
  type: types.ONE_DOG_LOAD_ERROR,
  payload: dogs,
});

export const oneDogLoadSuccess = (dog) => ({
  type: types.DOG_LOAD_SUCCESS,
  payload: dog,
});

export const dogCreatedError = (dog) => ({
  type: types.DOG_CREATED_ERROR,
  payload: dog,
});

export const dogUpdatedSuccess = (dogs) => ({
  type: types.DOG_UPDATED_SUCCESS,
  payload: dogs,
});

export const dogUpdatedError = (dogs) => ({
  type: types.DOG_UPDATED_ERROR,
  payload: dogs,
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

export const getOneDog = (id) => (dispatch) => {
  const auth = localStorage.token;
  axios.get(`${url}/${id}`, {
    headers: { Authorization: `Bearer ${auth}` },
  }).then((response) => {
    dispatch(oneDogLoadSuccess(response.data));
  }).catch((error) => {
    dispatch(oneDogLoadError(error.response.data.error));
  });
};

export const updateDog = (dog) => (dispatch) => {
  const auth = localStorage.token;
  const data = {
    regular_play_time: dog.playTime,
  };

  axios.patch(`${url}/${dog.id}`, data, { headers: { Authorization: `Bearer ${auth}` } }).then((response) => {
    dispatch(dogUpdatedSuccess(`${response.data.name} updated`));
  }).catch((error) => {
    dispatch(dogUpdatedError(error.response.data.error));
  });
};
