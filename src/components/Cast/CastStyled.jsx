import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-gap: 20px;
  list-style: none;
  justify-content: center;
  padding: 0;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 180px;
  background-color: #e2e2e2;

  img {
    width: 150px;
    height: 200px;
    object-fit: cover;
  }
`;

export const Actor = styled.li`
  text-align: center;
  border: 2px solid #888;
  width: 150px;
  border-radius: 8px;
  padding: 2px;

  h3 {
    font-weight: 500;
  }
  p {
    font-style: italic;
    color: #bdbdbd;
  }
`;
