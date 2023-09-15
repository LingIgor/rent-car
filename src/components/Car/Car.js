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
import {
 addToFavorite,
 removeFromFavorite
  
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
  // functionalities,
  // fuelConsumption,
  // engineSize,
  // description,
  // accessories,
  // rentalConditions,
  // mileage,
}) => {
  const favorite = useSelector(state => state.favorite); 
  const dispatch = useDispatch();
  const toggleFavorite = (id) => {  
    if (favorite.includes(id)) {
      dispatch( removeFromFavorite(id));
    } else {
      dispatch(addToFavorite(id));
    }
  };

  return (
    <div>
      <CardBox key={id}>
        <CarImgWrap>
          <CarImg src={img} alt={make} />
          <IconBtn         
          type="button"
          onClick={() => toggleFavorite(id)}         
        >
          {favorite.includes(id) ?  <AiFillHeart size={20} color='blue'/>:<AiOutlineHeart size={20}/>}
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
