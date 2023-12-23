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

export const SearchInput = styled.input`
  height: 25px;
  font-size: 20px;
  outline: none;
  border-radius: 8px;
  padding: 4px 8px;
  background-color: #888;
  color: #ececec;
  &::placeholder {
    color: #ececec;
  }
`;

export const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  gap: 15px;
`;

export const MoviesList = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  padding: 40px;
`;

export const MovieItem = styled.li`
  width: 250px;
  border: 2px solid #ececec;
  border-radius: 12px;
  display: flex;
  justify-content: center;

  a {
    max-width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ececec;
    text-decoration: none;
    text-align: center;
  }
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
