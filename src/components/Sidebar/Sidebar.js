import React from 'react';

import { InputFrom, InputTo, Aside } from './Sidebar.styled';
import Select from 'react-select';

export const Sidebar = ({cars, handleSelectChangeName, nameCar, reset, priceCar, handleSelectChangePrice}) => {
  

  if (!cars || cars.length === 0) {
    return []; 
  }

const uniqueMakes = [...new Set(cars.map((car) => car.make))];

const selectOptionsCar = uniqueMakes.map((make) => ({
  value: make,
  label: make,
}));

const moneyStep = Array.from({ length: 50 }, (_, index) => ({
  value: `option${(index + 1) * 10}`,
  label: `${(index + 1) * 10}`,
})); 





  return (
    <Aside >
      <div style={{ marginRight: '20px' }}>
        <label>Car Brand</label>
        <Select
        isSearchable={true}        
        onChange={handleSelectChangeName}
        value={nameCar}
          options={selectOptionsCar}
          placeholder="Enter the text"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              border: 'none',
              backgroundColor: '#F7F7FB',
              width: '224px',
              height: '48px',
              borderRadius: '14px',
              fontWeight: '500',
              fontSize: '18px',
              lineHeight: '20px',
            }),
            placeholder: (baseStyles, state) => ({
              ...baseStyles,
              color: 'grey',
            }),
          }}
        />
      </div>
      <div style={{ marginRight: '20px' }}>
        <label>Price/ 1 hour</label>

        <Select
        onChange={handleSelectChangePrice}
        value={priceCar}
          options={moneyStep}
          placeholder="To $"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              border: 'none',
              backgroundColor: '#F7F7FB',
              width: '125px',
              height: '48px',
              borderRadius: '14px',
              fontWeight: '500',
              fontSize: '18px',
              lineHeight: '20px',
            }),

            placeholder: (baseStyles, state) => ({
              ...baseStyles,
              color: 'grey',
            }),
          }}
        />
      </div>
      <div>
        <label>Сar mileage / km</label>
        <div>
          <InputFrom placeholder="From" />
          <InputTo placeholder="To" />
        </div>
        <button type='button' onClick={reset}> Reset</button>
      </div>
    </Aside>
  );
};
