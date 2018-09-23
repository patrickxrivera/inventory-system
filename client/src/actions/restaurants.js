import { createAction } from 'redux-actions';

import { fetchRestaurantsSuccess } from './utils/dispatch';
import api from '../api';

export const fetchRestaurants = () => async (dispatch) => {
  const response = await api.fetchRestaurantsSent();
  const { restaurants } = response.data;

  return dispatch(fetchRestaurantsSuccess(restaurants));
};
