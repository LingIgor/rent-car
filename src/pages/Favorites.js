import { ListCars } from 'components/ListCars/ListCars';
import { Sidebar } from 'components/Sidebar/Sidebar';
import React from 'react';
import { useSelector } from 'react-redux';

export const Favorites = ({ cars }) => {
  const favorite = useSelector(state => state.favorite);
  const favoriteCars = cars.filter(car => favorite.includes(car.id));

  return (
    <>
      <Sidebar cars={favoriteCars} />
      <ListCars data={favoriteCars} />
    </>
  );
};
