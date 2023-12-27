const { default: styled } = require('styled-components');

export const Container = styled.div`
  padding: 30px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #ececec;
  text-transform: capitalize;
  margin: 20px;
`;

export const DefaultBtn = styled.button`
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: #000000;
  color: #ececec;
  border-radius: 8px;
  padding: 14px 24px 16px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  transition: color 500ms ease, background-color 500ms ease;
  &:hover {
    color: #3a3a3a;
    background-color: #ccc;
  }
`;
