import React from 'react';

const Home = ({ restaurants }) => (
  <div>
    {restaurants.map(({ name }) => {
      <span>{name}</span>;
    })}
  </div>
);

export default Home;
