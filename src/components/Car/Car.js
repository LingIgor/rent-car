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
  addToFavorite,
  removeFromFavorite,
} from 'redux/Favorites/FavoritesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'components/Modal/Modal';

export const Car = ({ car }) => {
  const favorite = useSelector(state => state.favorite);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const toggleFavorite = id => {
    if (favorite.includes(id)) {
      dispatch(removeFromFavorite(id));
    } else {
      dispatch(addToFavorite(id));
    }
  };

  return (
    <div>
      <CardBox key={car.id}>
        <CarImgWrap>
          <CarImg src={car.img} alt={car.make} />
          <IconBtn type="button" onClick={() => toggleFavorite(car.id)}>
            {favorite.includes(car.id) ? (
              <AiFillHeart size={20} color="3470FF" />
            ) : (
              <AiOutlineHeart size={20} color="ffffff" />
            )}
          </IconBtn>
        </CarImgWrap>
        <TextBox>
          <MainInfo>
            <CarInfo style={{ margin: '0' }}>
              <CarText>{car.make}</CarText>
              <ModelBlue>
                {car.model}
                <span style={{ color: 'black' }}>,</span>
              </ModelBlue>
              <CarText>{car.year}</CarText>
            </CarInfo>
            <CarText>{car.rentalPrice}</CarText>
          </MainInfo>
          <SecondaryInfo>
            <SecondaryCarText>{car.address}</SecondaryCarText>
            <SecondaryCarText>{car.rentalCompany}</SecondaryCarText>
            <SecondaryCarText>{car.type}</SecondaryCarText>
            <SecondaryCarText>{car.make}</SecondaryCarText>
            <SecondaryCarText>{car.id}</SecondaryCarText>
          </SecondaryInfo>
          {isModalOpen ? (
            <Modal car={car} onClose={() => setIsModalOpen(false)} />
          ) : (
            <></>
          )}
          <LearnMoreBtn onClick={openModal}>Learn more</LearnMoreBtn>
        </TextBox>
      </CardBox>
    </div>
  );
};
