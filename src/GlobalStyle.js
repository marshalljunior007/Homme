import { createGlobalStyle, styled } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
  scroll-behavior: smooth;
}
body{
    margin: 0;
    background: #fff6d4;
    font-family:Sora;
}

h1 {
    font-size: 40px;
    text-transform: uppercase;
}

h2 {
    font-size: 40px;
    text-transform: uppercase;
}

h3 {
    font-size: 20px;
    text-transform: capitalize;
    margin: 0;
}



p{
    color: #575757;
}

a{
    text-decoration:none  ;
}

.center{
  text-align: center;
}
`;
export const Container = styled.div`
  width: 85%;
  max-width: 1200px;
  margin: auto;
  position: relative;
`;

export const Row = styled.div`
  display: flex;
  gap: 40px;
  > div {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SectionWrapper = styled.div`
  padding: 56px;
`;

export default GlobalStyle;
