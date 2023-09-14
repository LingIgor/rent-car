import React from 'react';
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
  favor,
  handleAddToFavorites,
  // functionalities,
  // fuelConsumption,
  // engineSize,
  // description,
  // accessories,
  // rentalConditions,
  // mileage,
}) => {
  return (
    <div>
      <CardBox key={id}>
        <CarImgWrap>
          <CarImg src={img} alt={make} />
          <IconBtn type="button" onClick={() => handleAddToFavorites(car)}>
            {!favor ? (
              <AiOutlineHeart size={20} />
            ) : (
              <AiFillHeart size={20} style={{ color: 'blue' }} />
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
