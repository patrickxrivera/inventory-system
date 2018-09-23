import React from 'react';
import { isEmpty, isNil } from '../../utils/helpers';
import { HomeView, NoRestaurantsMessage } from './';

const HomeBranch = ({ restaurants }) => {
  switch (true) {
    case isNil(restaurants):
      return <div>Loading</div>;
    case isEmpty(restaurants):
      return <NoRestaurantsMessage />;
    default:
      return <HomeView restaurants={restaurants} />;
  }
};

export default HomeBranch;
