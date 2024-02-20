import styled from 'styled-components';

export const Header = styled.div`
  text-align: center;
`;

export const LogoCon = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  margin-top: 40px;
  gap: 40px;
  > div {
    margin: auto;
  }
  img {
    opacity: 50%;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto auto auto;
  }
`;
