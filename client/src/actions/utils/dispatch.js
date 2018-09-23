import { FETCH_RESTAURANTS } from './types';

export const fetchRestaurantsSuccess = (restaurants) => ({
  type: FETCH_RESTAURANTS,
  restaurants
});
