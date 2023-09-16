import React from 'react';
import Logo from '../../images/logo.png';
import {
  NavBarList,
  NavBarItem,
  NavLinkStyled,
  NavLogo,
  Nav,
} from './NavBar.styled';

export const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLogo>
          <img src={Logo} alt="logo" />
        </NavLogo>
        <NavBarList>
          <NavBarItem style={{}}>
            <NavLinkStyled
              to={'/'}
              style={{ textDecoration: 'none' }}
              activeClassName="active-link"
            >
              Home
            </NavLinkStyled>
          </NavBarItem>
          <NavBarItem>
            <NavLinkStyled
              to={'/catalog'}
              style={{ textDecoration: 'none' }}
              activeClassName="active-link"
            >
              Catalog
            </NavLinkStyled>
          </NavBarItem>
          <NavBarItem>
            <NavLinkStyled
              to={'/favorites'}
              style={{ textDecoration: 'none' }}
              activeClassName="active-link"
            >
              Favorite
            </NavLinkStyled>
          </NavBarItem>
        </NavBarList>
      </Nav>
    </>
  );
};
