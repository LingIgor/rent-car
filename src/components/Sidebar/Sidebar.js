import React from 'react';

import { InputFrom, InputTo } from './Sidebar.styled';
import Select from 'react-select';

export const Sidebar = () => {
  // const [value, SetValue ] =useState(null)
  // Настройки для React-Select
  const selectOptions = [
    { value: 'option1', label: 'Опция 1' },
    { value: 'option2', label: 'Опция 2' },
    // Другие опции
  ];

  return (
    <aside style={{ display: 'flex', marginBottom: '50px' }}>
      <div style={{ marginRight: '20px' }}>
        <label>Car Brand</label>

        <Select
          options={selectOptions}
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
          options={selectOptions}
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
      </div>
    </aside>
  );
};
