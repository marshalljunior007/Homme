import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Arrow = styled.div`
  display: flex;
  gap: 20px;
`;

export const ArrowIcon = styled.div`
  cursor: pointer;
`;

export const IntRow = styled.div`
  display: flex;
  padding: 40px 0px;
  gap: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const IntCol1 = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const IntCol2 = styled.div`
  flex: 6;
  overflow: hidden;
`;

export const Line = styled.div`
  width: 1px;
  height: 250px;
  background: #000;
  margin-left: 30px;
`;

export const Slide = styled.div`
  width: 100%;
  height: 500px;
  background: #ccc;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
`;
