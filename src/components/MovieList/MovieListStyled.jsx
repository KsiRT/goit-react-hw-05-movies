import styled from 'styled-components';

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
  min-height: 400px;
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
