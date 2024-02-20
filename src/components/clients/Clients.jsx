import React from 'react';
import { Container, SectionWrapper } from '../../GlobalStyle';
import { Header, LogoCon } from './ClientStyle';
import logo1 from './../../images/icon1.png';
import logo2 from './../../images/icon2.png';
import logo3 from './../../images/icon3.png';
import logo4 from './../../images/icon4.png';
import logo5 from './../../images/icon5.png';
import logo6 from './../../images/icon6.png';
const Clients = () => {
  return (
    <div>
      <SectionWrapper id="clients">
        <Container>
          <Header>
            <h2>Clients</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
              scelerisque accumsan, a vestibulum eget velit.
            </p>
          </Header>
          <LogoCon>
            <div>
              <img src={logo1} />
            </div>
            <div>
              <img src={logo2} />
            </div>
            <div>
              <img src={logo3} />
            </div>
            <div>
              <img src={logo4} />
            </div>
            <div>
              <img src={logo5} />
            </div>
            <div>
              <img src={logo6} />
            </div>
          </LogoCon>
        </Container>
      </SectionWrapper>
    </div>
  );
};

export default Clients;
