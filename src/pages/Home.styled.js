import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const ImgHero = styled.img`
  position: relative;
  width: 100vw;
  height: 100vh;

  @media (max-width: 767px) {
    /* Стилі для мобільних пристроїв */
    width: 100%;
    height: auto;
  }
`;

export const ImgButton = styled.img`
  width: 250px;
  height: 180px;
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 767px) {
    /* Стилі для мобільних пристроїв */
    width: 100%;
    height: auto;
  }
`;

export const ButtonCar = styled(Link)`
  width: 200px;
  height: auto;
  position: absolute;
  top: 150px;
  right: 100px;
  cursor: pointer;
  animation: ${scaleAnimation} 2s ease infinite;

  @media (max-width: 767px) {
    /* Стилі для мобільних пристроїв */
    width: 100px;
    height: auto;
    top: 200px;
    right: 10%;
  }

  @media (max-width: 365px) {
    width: 60px;
    height: auto;
    top: 150px;
    right: 10%;
  }
`;

export const RentalText = styled.p`
  position: absolute;
  top: -30px;
  left: 60px;
  font-size: 25px;
  font-weight: 600;
  color: black;

  &:hover {
    color: red;
  }

  @media (max-width: 767px) {
    font-size: 18px;
    left: 10px;
  }

  @media (max-width: 365px) {
    font-size: 14px;
    left: 10px;
  }
`;
