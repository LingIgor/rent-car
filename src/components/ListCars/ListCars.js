import React, { useEffect, useState } from 'react';
import { SectionContainer, List, ListItem } from './ListCars.styled';

import { Car } from 'components/Car/Car';

import { fetchCars } from 'redux/Cars/Operations';

export const ListCars = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
 

  useEffect(() => {   
    const loadCars = async () => {
      try {
        const data = await fetchCars(page);
        setCars(prevCars => [...prevCars, ...data]);
        console.log(data)
      } catch (error) {
        console.log( error);
      }
    };
    loadCars();
  }, [page]);


   const handleMore = () => {
    setPage(page +1)
  }


  return (
    <>
      
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
     
    </>
  );
};
