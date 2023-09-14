import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

import {
  CarImg,
  CarImgWrap,
  TextBox,
  CardBox,
  MainInfo,
  CarInfo,
  CarText,
  ModelBlue,
  SecondaryInfo,
  SecondaryCarText,
  LearnMoreBtn,
  IconBtn,
} from './Car.styled';
import {
  deleteFavoritesCars,
  favoriteCars,
} from 'redux/Favorites/FavoritesSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Car = ({
  model,
  make,
  id,
  img,
  year,
  address,
  rentalPrice,
  rentalCompany,
  type,
  car,

  // functionalities,
  // fuelConsumption,
  // engineSize,
  // description,
  // accessories,
  // rentalConditions,
  // mileage,
}) => {
  const favorite = useSelector(state => state.favorite);
  const [favor, setFavor] = useState(false);
  const dispatch = useDispatch();

  const handleAddToFavorites = car => {
    if (!favorite.some(favCar => favCar.id === car.id)) {
      dispatch(favoriteCars(car));
    }
    setFavor(!favor);
  };

  const deleteFavorite = car => {
    if (!favorite.some(favCar => favCar.id === car.id)) {
      dispatch(deleteFavoritesCars(car));
    }
    setFavor(!favor);
  };

  return (
    <div>
      <CardBox key={id}>
        <CarImgWrap>
          <CarImg src={img} alt={make} />
          <IconBtn type="button">
            {!favor ? (
              <AiOutlineHeart
                size={20}
                onClick={() => handleAddToFavorites(car)}
              />
            ) : (
              <AiFillHeart
                size={20}
                style={{ color: 'blue' }}
                onClick={() => deleteFavorite(car)}
              />
            )}
          </IconBtn>
        </CarImgWrap>
        <TextBox>
          <MainInfo>
            <CarInfo style={{ margin: '0' }}>
              <CarText>{make}</CarText>
              <ModelBlue>
                {model}
                <span style={{ color: 'black' }}>,</span>
              </ModelBlue>
              <CarText>{year}</CarText>
            </CarInfo>
            <CarText>{rentalPrice}</CarText>
          </MainInfo>
          <SecondaryInfo>
            <SecondaryCarText>{address}</SecondaryCarText>
            <SecondaryCarText>{rentalCompany}</SecondaryCarText>
            <SecondaryCarText>{type}</SecondaryCarText>
            <SecondaryCarText>{make}</SecondaryCarText>
            <SecondaryCarText>{id}</SecondaryCarText>
          </SecondaryInfo>
          <LearnMoreBtn>Learn more</LearnMoreBtn>
        </TextBox>
      </CardBox>
    </div>
  );
};
