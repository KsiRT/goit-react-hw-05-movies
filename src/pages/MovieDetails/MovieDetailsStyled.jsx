import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 30px 0;
  align-self: flex-start;
  color: #ececec;
  width: 60vw;
  img {
    width: 350px;
  }
  h2 {
    font-size: 30px;
  }
  p {
    font-size: 20px;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 20px;
  min-height: 40px;
  padding-left: 30px;
  a {
    color: #ececec;
    font-size: 20px;
    text-decoration: none;
    font-weight: 600;
  }
`;

export const StyledOutlet = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  background-color: #696969;
  border-radius: 12px;
  padding: 20px;
  margin: 0;
`;
