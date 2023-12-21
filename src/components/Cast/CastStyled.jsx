import styled from 'styled-components';

export const CastList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-gap: 20px;
  list-style: none;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 150px;
  background-color: #e2e2e2;

  img {
    width: 100px;
    height: 150px;
    object-fit: cover;
  }
`;

export const Actor = styled.li`
  text-align: center;
  h3 {
    font-weight: 500;
  }
  p {
    font-style: italic;
    color: #5f5f5f;
  }
`;
