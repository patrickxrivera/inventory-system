import { handleActions } from 'redux-actions';

const initialState = {
  all: null
};

export default handleActions(
  {
    FETCH_RESTAURANTS: (state, action) => ({
      ...state,
      all: action.restaurants
    })
  },
  initialState
);

export const selectRestaurants = (state) => state.restaurants.all;
