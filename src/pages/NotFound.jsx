import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <>
      <StyledLink to="/">Home</StyledLink>

      <Main>
        <Wrap>
          <h1>Not found</h1>
        </Wrap>
      </Main>
    </>
  );
};

export default NotFound;

const Main = styled.div`
  display: table;
  width: 100%;
  height: 100vh;
  text-align: center;
  font-family: 'Lato', sans-serif;
  color: #888;
  margin: 0;
`;

const Wrap = styled.div`
  display: table-cell;
  vertical-align: middle;
  h1 {
    font-size: 50px;
    display: inline-block;
    padding-right: 12px;
    animation: type 0.7s alternate infinite;
  }
  @keyframes type {
    from {
      box-shadow: inset -4px 0px 0px #888;
    }
    to {
      box-shadow: inset -4px 0px 0px transparent;
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #888;
  font-size: 20px;
  padding: 20px 40px;
  position: absolute;
  font-weight: 600;
  &:hover {
    color: black;
  }
`;
