import { NavBar } from 'components/NavBar/NavBar';
import React from 'react';
import { HeaderStyled } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <NavBar />
    </HeaderStyled>
  );
};
