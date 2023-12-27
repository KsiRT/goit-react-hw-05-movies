import styled from 'styled-components';

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

export const StyledSearchForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  gap: 15px;
`;
