import React from 'react';
import hero from '../images/Hero.jpg';
import { FcOvertime } from 'react-icons/fc';

import { PiNumberEightBold } from 'react-icons/pi';
import { AiOutlineCar } from 'react-icons/ai';
import { RiCustomerService2Line } from 'react-icons/ri';

import {
  ImgHero,
  ImgButton,
  RentalText,
  ButtonCar,
  HeroText,
  HeroTitle,
  HeroBox,
  QualityBox,
  QualityBoxText,
  Advantages,
  QualityTitle,
} from './Home.styled';
import buttonImg from '../images/key.png';

export const Home = () => {
  return (
    <>
      <ImgHero src={hero} alt="Hero" />
      <HeroBox>
        <HeroText>RENT_CAR </HeroText>
        <HeroTitle>ПРОКАТ АВТОМОБІЛІВ</HeroTitle>
        <HeroText>під індивідуальні вимоги кажного клієнта</HeroText>
      </HeroBox>
      <ButtonCar to={'/catalog'}>
        <ImgButton src={buttonImg} alt="button" />
        <RentalText>Rental Car</RentalText>
      </ButtonCar>
      <Advantages>
        <QualityTitle>Чому обирають нас?</QualityTitle>
        <QualityBox>
          <FcOvertime
            size={35}
            style={{
              border: '1px solid #0bc9ec',
              borderRadius: '50%',
              padding: '5px',
            }}
          />
          <QualityBoxText>
            <h3>Подача за 15 хвилин</h3>
            <p>
              Ми забезпечуємо машину завчасно, в справному та чистому вигляді.
            </p>
          </QualityBoxText>
        </QualityBox>
        <QualityBox>
          <PiNumberEightBold
            size={35}
            style={{
              border: '1px solid #0bc9ec',
              borderRadius: '50%',
              padding: '5px',
            }}
          />
          <QualityBoxText>
            <h3>10 років досвіду</h3>
            <p>
              Ми працюємо більше 10 років, наш досвід - це застава вашого покою
              та задоволення.
            </p>
          </QualityBoxText>
        </QualityBox>
        <QualityBox>
          <AiOutlineCar
            size={35}
            style={{
              border: '1px solid #0bc9ec',
              borderRadius: '50%',
              padding: '5px',
            }}
          />
          <QualityBoxText>
            <h3>Великий автопарк</h3>
            <p>
              У нас самий великий вибір автомобілів на любий смак, колір та
              гаманець.
            </p>
          </QualityBoxText>
        </QualityBox>
        <QualityBox>
          <RiCustomerService2Line
            size={35}
            style={{
              border: '1px solid #0bc9ec',
              borderRadius: '50%',
              padding: '5px',
            }}
          />
          <QualityBoxText>
            <h3>Бездоганний сервіс</h3>
            <p>
              Наші менеджери зроблять ваш вибірне тільки простим і вдалим, але і
              залишать після спілкування гарний настрій.
            </p>
          </QualityBoxText>
        </QualityBox>
      </Advantages>
    </>
  );
};
