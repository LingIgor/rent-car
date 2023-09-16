import { ListCars } from 'components/ListCars/ListCars';
import { Sidebar } from 'components/Sidebar/Sidebar';
import React, { useState } from 'react';

export const Catalog = ({ cars }) => {
  const [nameCar, setNameCar] = useState('');
  const [priceCar, setPriceCar] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
  const [minMileage, setMinMileage] = useState('');

  console.log(minMileage);
  console.log(nameCar);

  const handleSelectChangeName = selected => {
    setNameCar(selected);
  };

  const handleSelectChangePrice = selected => {
    setPriceCar(selected);
  };

  const handleMinMileage = selected => {
    setMinMileage(selected);
  };

  const handleMaxMileage = selected => {
    setMaxMileage(selected);
  };

  // const filteredResults = cars.filter(car => {
  //   if (!nameCar) {
  //     return true;
  //   }
  //   return car.make === nameCar.label;
  // });

  // const filterToPrice = filteredResults.filter(car => {
  //   if (!priceCar) {
  //     return true;
  //   }

  //   return (
  //     parseFloat(car.rentalPrice.replace('$', '')) <= Number(priceCar.label)
  //   );
  // });

  const filteredCars = cars.filter(car => {
    const carPrice = parseFloat(car.rentalPrice.replace('$', ''));
    const carMileage = car.mileage;

    if (!priceCar && !nameCar && !minMileage && !maxMileage) {
      return true; // Если все фильтры не заданы, вернуть true, чтобы показать все машины.
    }

    // Поиск по цене
    const priceMatch = !priceCar || carPrice <= Number(priceCar.label);

    // Поиск по названию
    const nameMatch = !nameCar || car.make === nameCar.label;

    // Поиск по пробегу
    const mileageMatch =
      (!minMileage || carMileage >= minMileage) &&
      (!maxMileage || carMileage <= maxMileage);

    // Объединяем условия с помощью операторов "и" (&&)
    return priceMatch && nameMatch && mileageMatch;
  });

  const reset = () => {
    setNameCar('');
    setPriceCar('');
  };

  return (
    <>
      <Sidebar
        cars={cars}
        handleSelectChangeName={handleSelectChangeName}
        nameCar={nameCar}
        priceCar={priceCar}
        reset={reset}
        handleSelectChangePrice={handleSelectChangePrice}
        handleMinMileage={handleMinMileage}
        handleMaxMileage={handleMaxMileage}
        maxMileage={maxMileage}
        minMileage={minMileage}
      />
      <ListCars data={filteredCars} />
    </>
  );
};
