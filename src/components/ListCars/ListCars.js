import React, { useEffect, useState } from 'react';
import { SectionContainer, List, ListItem } from './ListCars.styled';

import { Car } from 'components/Car/Car';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/Cars/Operations';

export const ListCars = () => {
  const [page, Setpage] =useState(1)
  const  cars  = useSelector(state => state.cars);
  const dispatch = useDispatch();

  console.log(cars)





  const handleMore = () => {
    Setpage(page +1)
  }

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  return (
    <>
      {cars.length > 0 ? (
        <SectionContainer>
          <List>
            {cars.map(car => (
              <ListItem key={car.id}>
                <Car
                  model={car.model}
                  make={car.make}
                  year={car.year}
                  rentalPrice={car.rentalPrice}
                  isFavorite={car.isFavorite}
                  address={car.address}
                  rentalCompany={car.rentalCompany}
                  functionalities={car.functionalities}
                  id={car.id}
                  type={car.type}
                  img={car?.img}
                  fuelConsumption={car.fuelConsumption}
                  engineSize={car.engineSize}
                  description={car.description}
                  accessories={car.accessories}
                  rentalConditions={car.rentalConditions}
                  mileage={car.mileage}
                />
             
              </ListItem>
            ))}
            <button onClick={handleMore}>MORE</button>
          </List>
        </SectionContainer>
      ) : (
        <></>
      )}
    </>
  );
};