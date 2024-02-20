import styled from 'styled-components';

export const FooterCon = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #303030;
  padding: 50px 0px;
  .col1 {
    flex: 1;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    .col1 {
      padding-bottom: 20px;
    }
  }
`;

export const FooterWrap = styled.div`
  margin-top: -10px;
  background-color: #000000;
`;

export const ServiceCon = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 40px;
  h3 {
    color: #dedede;
  }
  ul {
    padding: 0;
    list-style: none;
    margin: 2px 0px;
  }
  li {
    color: #787878;
    padding: 6px 0px;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

export const SocialsCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 300px;
  text-align: center;
`;

export const Socials = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 5px;
  .social {
    cursor: pointer;
  }
`;
