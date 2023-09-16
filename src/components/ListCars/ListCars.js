import React from 'react';
import { SectionContainer, List, ListItem, BtnLoad } from './ListCars.styled';

import { Car } from 'components/Car/Car';

export const ListCars = ({ data, handleMore }) => {
  console.log(data);
  return (
    <>
      <SectionContainer>
        <List>
          {data.map(car => (
            <ListItem key={car.id}>
              <Car car={car} />
            </ListItem>
          ))}
        </List>
        {data.length >= 8 ? (
          <BtnLoad onClick={handleMore}>Load more</BtnLoad>
        ) : (
          <></>
        )}
      </SectionContainer>
    </>
  );
};
