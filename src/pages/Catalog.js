import { ListCars } from 'components/ListCars/ListCars';
import { Sidebar } from 'components/Sidebar/Sidebar';
import React from 'react';

export const Catalog = () => {
  return (
    <>
      <Sidebar />
      <ListCars />
    </>
  );
};
