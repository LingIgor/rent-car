import React from 'react';
import hero from '../images/Hero.jpg';
import { RentalButton } from 'components/Modal/Modal.styled';

export const Home = () => {
  return (
    <>
      <img src={hero} alt="Hero" style={{ position: 'relative' }} />
      <RentalButton style={{ position: 'absolute' }}> Rental Car </RentalButton>
    </>
  );
};
