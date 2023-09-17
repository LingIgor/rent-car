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

export const HeroBox = styled.div`
  position: absolute;
  top: 150px;
  left: 100px;

  @media (max-width: 767px) {
    top: 70px;
    left: 40px;
  }
`;

export const HeroText = styled.p`
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const HeroTitle = styled.h2`
  font-size: 30px;
  color: yellow;

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

export const QualityBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
  width: 500px;
  gap: 20px;
  border: 3px solid #0bc9ec;

  @media (max-width: 767px) {
    margin-bottom: 20px;
    width: 300px;
    gap: 10px;
    border: 2px solid #0bc9ec;
  }
`;

export const QualityBoxText = styled.div`
  max-width: 300px;
`;

export const Advantages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QualityTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;
