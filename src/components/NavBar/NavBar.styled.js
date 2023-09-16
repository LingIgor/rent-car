import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavBarList = styled.ul`
  display: flex;
`;

export const NavBarItem = styled.li`
  list-style: none;
  margin-right: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  &:hover {
    color: #0b44cd;
  }
  &.active {
    color: blue;
  }
`;

export const NavLogo = styled.div`
  height: 150px;
  width: 150px;
`;
