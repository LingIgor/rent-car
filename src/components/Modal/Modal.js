import React, { useEffect } from 'react';
import {
  Backdrop,
  CarImage,
  CloseIcon,
  Conditions,
  ConditionsList,
  Description,
  InfoTitle,
  ModalCar,
  RentalButton,
  Tags,
  TagsItem,
  Title,
} from './Modal.styled';

export const Modal = ({ car, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const city = car.address.split(',')[1].trim();
  const country = car.address.split(',')[2].trim();
  const rental = car.rentalConditions.split('\n');

  const rentalPart = rental[0].split(' ');
  console.log(rentalPart[2]);

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalCar>
        <CloseIcon onClick={onClose} />
        <CarImage src={car.img} alt={car.make} />
        <Title>{`${car.make} ${car.model}, ${car.year}`}</Title>
        <Tags>
          <TagsItem>{city}</TagsItem>
          <TagsItem>{country}</TagsItem>
          <TagsItem>id: {car.id}</TagsItem>
          <TagsItem>Year: {car.year}</TagsItem>
          <TagsItem>Type: {car.type}</TagsItem>
          <TagsItem>Fuel Consumption: {car.fuelConsumption}</TagsItem>
          <TagsItem>Type: {car.engineSize}</TagsItem>
        </Tags>
        <Description>{car.description}</Description>
        <InfoTitle>Accessories and functionalities:</InfoTitle>
        <Tags>
          {car.accessories.map(accessories => (
            <TagsItem key={accessories}>{accessories}</TagsItem>
          ))}
        </Tags>
        <InfoTitle>Rental Conditions: </InfoTitle>
        <ConditionsList>
          <Conditions>
            Minimum age: <span style={{ color: 'blue' }}>{rentalPart[2]}</span>
          </Conditions>
          <Conditions> {rental[1]}</Conditions>
          <Conditions>{rental[2]}</Conditions>

          <Conditions>
            Mileage: <span style={{ color: 'blue' }}>{car.mileage}</span>
          </Conditions>
          <Conditions>
            Price: <span style={{ color: 'blue' }}>{car.rentalPrice}</span>
          </Conditions>
        </ConditionsList>
        {/* <CloseIcon onClick={onClose} src={closeIcon} alt="closeIcon" /> */}
        <a href={`tel:+380111111111`}>
          <RentalButton type="button">Rental car</RentalButton>
        </a>
      </ModalCar>
    </Backdrop>
  );
};
