import React from 'react';

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
  // functionalities,
  // fuelConsumption,
  // engineSize,
  // description,
  // accessories,
  // rentalConditions,
  // mileage,
}) => {
  return (
    <div    
     
  >

      <CardBox key={id}>
        <CarImgWrap>
          <CarImg src={img} alt={make} />
          <IconBtn type="button"></IconBtn>
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
