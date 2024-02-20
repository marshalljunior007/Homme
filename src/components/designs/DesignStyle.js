import styled from 'styled-components';

export const SliderCol = styled.div`
  overflow: hidden;
`;

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Slide = styled.div`
  width: 100%;
  height: 500px;
  background: #ccc;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    height: 350px;
    flex-direction: column;
  }
`;

export const ArrowIcon = styled.div`
  background: #fff;
  padding: 10px;
  cursor: pointer;
`;

export const Arrow = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  z-index: 1;
  bottom: 30px;
  left: 30px;
`;

export const Title = styled.div`
  hr {
    width: 150px;
    border: 1px solid #000;
    float: left;
  }
  float: left;
  padding-top: 20px;
  h3 {
    font-weight: 400;
  }
`;
