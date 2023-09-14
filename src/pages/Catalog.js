import { ListCars } from 'components/ListCars/ListCars';
import { Sidebar } from 'components/Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { fetchCars } from 'redux/fetchCars';

export const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);

  const handleMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const loadCars = async () => {
      try {
        const data = await fetchCars(page);
        setCars(prevCars => [...prevCars, ...data]);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadCars();
  }, [page]);

  return (
    <>
      <Sidebar />
      <ListCars data={cars} handleMore={handleMore} />
    </>
  );
};
