import React, { useState } from 'react';
import { SectionContainer, List, ListItem } from './ListCars.styled';

import { Car } from 'components/Car/Car';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteCars } from 'redux/Favorites/FavoritesSlice';

export const ListCars = ({ data, handleMore }) => {
  const { favorite } = useSelector(state => state.favorite);
  const [favor, setFavor] = useState(false);

  const dispatch = useDispatch();

  const handleAddToFavorites = car => {
    if (!favorite.some(favCar => favCar.id === car.id)) {
      dispatch(favoriteCars([...favorite, car]));
    }
    setFavor(!favor);
  };

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
                handleAddToFavorites={handleAddToFavorites}
                favor={favor}
              />
            </ListItem>
          ))}
          <button onClick={handleMore}>MORE</button>
        </List>
      </SectionContainer>
    </>
  );
};
