import { NavBar } from 'components/NavBar/NavBar';
import React from 'react';
import { HeaderStyled } from './Header.styled';
import { MobileButtons } from 'components/MobileNav/MobileNav';

export const Header = () => {
  return (
    <HeaderStyled>
      <NavBar />
      <MobileButtons />
    </HeaderStyled>
  );
};
