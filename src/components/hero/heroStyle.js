import { styled } from 'styled-components';

export const HeroWrapper = styled.div`
  position: relative;
  padding-top: 120px;
  h1 {
    margin-top: 15%;
  }
  .marq {
    position: absolute;
    bottom: 15%;
  }

  .txt {
    font-size: 140px;
    font-weight: 700;
    text-transform: uppercase;
    font-family: Roboto;
    -webkit-text-stroke: 0.5px black;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
  }
`;
