import React from 'react';

import {
  CarImg,
  CarImgWrap,
  InfoWrapper,
  Item,
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
  functionalities,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  rentalConditions,
  mileage,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '1600px',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
      }}
    >
      {/* {cars.map(
        ({
          model,
          make,
          id,
          img,
          year,
          address,
          rentalPrice,
          rentalCompany,
          type,
        }) => { */}

      <Item key={id}>
        <CarImgWrap>
          <CarImg src={img} alt={make} />
          <IconBtn type="button"></IconBtn>
        </CarImgWrap>
        <InfoWrapper>
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
        </InfoWrapper>
      </Item>
    </div>
  );
};
