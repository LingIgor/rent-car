import { Link, NavLink } from 'react-router-dom';
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
  display: flex;
  height: 20px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s, box-shadow 0.2s;
  color: black;
  background-color: white;
  font-size: 18px;
  text-align: center;
  align-items: center;

  &:hover {
    color: white;
    background-color: black;
  }
  &.active {
    color: white;
    background-color: black;
  }
`;

export const NavLogo = styled(Link)`
  height: 150px;
  width: 150px;
  position: absolute;
  top: -40px;
  left: 0;
`;
