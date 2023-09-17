import React from 'react';
import hero from '../images/Hero.jpg';

import { ImgHero, ImgButton, RentalText, ButtonCar } from './Home.styled';
import buttonImg from '../images/key.png';

export const Home = () => {
  return (
    <>
      <ImgHero src={hero} alt="Hero" />
      {/* <RentalButton style={{ position: 'absolute', top: '600px', right: '0' }}>
        {' '}
        Rental Car{' '}
      </RentalButton> */}
      <ButtonCar to={'/catalog'}>
        <ImgButton src={buttonImg} alt="button" />
        <RentalText>Rental Car</RentalText>
      </ButtonCar>
    </>
  );
};
