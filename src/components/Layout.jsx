import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </StyledHeader>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 15px 40px;
  background-color: #1c1c1c;
  font-size: 25px;
  text-decoration: none;
  nav {
    display: flex;
    gap: 30px;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  &.active {
    color: orange;
  }
`;
