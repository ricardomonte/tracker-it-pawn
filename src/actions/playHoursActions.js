import axios from 'axios';
import * as types from './actionTypes';

const url = 'http://localhost:4000/api/v1/playhours';

export const playHourDogLoadSuccess = (playHour) => ({
  type: types.PLAYHOUR_DOG_LOAD_SUCCESS,
  payload: playHour,
});

export const playHourDogLoadError = (playHour) => ({
  type: types.PLAYHOUR_DOG_LOAD_ERROR,
  payload: playHour,
});

export const playHourCreatedSuccess = (playHour) => ({
  type: types.PLAYHOUR_CREATED_SUCCESS,
  payload: playHour,
});

export const playHourCreatedError = (playHour) => ({
  type: types.PLAYHOUR_CREATED_ERROR,
  payload: playHour,
});

export const loadPlayHourDog = (id) => (dispatch) => {
  const auth = localStorage.token;
  const params = {
    dog_id: parseInt(id, 10),
  };

  axios.get(`http://localhost:4000/api/v1/dogs/${params.dog_id}/my_hours`, { headers: { Authorization: `Bearer ${auth}` } }).then((response) => {
    dispatch(playHourDogLoadSuccess(response.data));
  }).catch((error) => {
    dispatch(playHourDogLoadError(error.response.data.error));
  });
};

export const createPlayHour = (hourPlay) => (dispatch) => {
  const auth = localStorage.token;
  const data = {
    hour: hourPlay.hour,
    play: hourPlay.date,
    dog_id: hourPlay.dog,
  };

  axios.post(url, data, { headers: { Authorization: `Bearer ${auth}` } }).then((response) => {
    dispatch(playHourCreatedSuccess(`${response.data.message} created`));
  }).catch((error) => {
    dispatch(playHourCreatedError(error.response.data.error));
  });
};
