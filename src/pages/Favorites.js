import { ListCars } from 'components/ListCars/ListCars';
import { Sidebar } from 'components/Sidebar/Sidebar';
import React from 'react';
import { useSelector } from 'react-redux';

export const Favorites = () => {
  const data = useSelector(state => state.favorite.favorite);
  console.log(data);

  return (
    <>
      <Sidebar />
      <ListCars data={data} />
    </>
  );
};
