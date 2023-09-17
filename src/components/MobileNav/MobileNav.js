import React, { useState } from 'react';
import { MobileButtonsContainer } from './MobileNav.styled';
import { NavLogo, NavLinkStyled } from 'components/NavBar/NavBar.styled';
import Logo from '../../images/logo.png';

export const MobileButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButtons = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavLogo to={'/'} onClick={toggleButtons}>
        <img src={Logo} alt="logo" />
      </NavLogo>
      <MobileButtonsContainer style={{ left: isOpen ? '120px' : '1000px' }}>
        <NavLinkStyled to={'/'} style={{ textDecoration: 'none' }}>
          Home
        </NavLinkStyled>
        <NavLinkStyled to={'/catalog'} style={{ textDecoration: 'none' }}>
          Catalog
        </NavLinkStyled>
        <NavLinkStyled to={'/favorites'} style={{ textDecoration: 'none' }}>
          Favorite
        </NavLinkStyled>
      </MobileButtonsContainer>
    </>
  );
};
