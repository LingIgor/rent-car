import { ListCars } from 'components/ListCars/ListCars';
import { Sidebar } from 'components/Sidebar/Sidebar';
import React, { useState } from 'react';


export const Catalog = ({cars}) => {  

  const [nameCar, setNameCar] = useState("")
  const [priceCar, setPriceCar] = useState("")
console.log(nameCar)
console.log(Number(priceCar.label))

  const handleSelectChangeName = (selected) => {
    setNameCar(selected);
  }

  const handleSelectChangePrice = (selected) => {
    setPriceCar(selected);
  }

    const filteredResults = cars.filter((car) => {
      if (!nameCar) {
        return true;        
      }
      return car.make === nameCar.label   
    });


    const filterToPrice = filteredResults.filter((car) => {
      if ( !priceCar) {
        return true; 
      }

      return parseFloat(car.rentalPrice.replace("$", "")) <= Number(priceCar.label) 
    })


    const reset = () => {
  setNameCar("")  
  setPriceCar("")
  }
    




  return (
    <>
      <Sidebar cars={cars}  handleSelectChangeName={handleSelectChangeName} nameCar={nameCar} priceCar={priceCar} reset={reset} handleSelectChangePrice={handleSelectChangePrice}/>
      <ListCars data={filterToPrice}  />
    </>
  );
};
