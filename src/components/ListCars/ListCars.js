import React from 'react';
import { SectionContainer, List, ListItem } from './ListCars.styled';

import { Car } from 'components/Car/Car';

export const ListCars = ({ data, handleMore }) => {

  console.log(data)
  return (


    <>
      <SectionContainer>
        <List>
          {data.map(car => (
            <ListItem key={car.id}>
              <Car
                car={car}
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
