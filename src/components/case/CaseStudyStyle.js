import styled from 'styled-components';

export const Header = styled.div`
  text-align: center;
`;
export const Caseimg = styled.div`
  width: 100%;
  height: 500px;
  background: #ccc;
  margin-top: 40px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    height: 350px;
    flex-direction: column;
  }
`;

export const Desc = styled.div`
  padding: 20px 0px;
  h3 {
    margin-bottom: 10px;
  }

  a {
    color: #575757;
    margin-top: 40px;
    text-transform: capitalize;
  }
`;
