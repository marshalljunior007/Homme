import React from 'react';
import { HeroWrapper } from './heroStyle';
import { Container, Row } from '../../GlobalStyle';
import Button from '../button/button';
import img from './../../images/hero-img.png';
import Marquee from 'react-fast-marquee';
import star from './../../images/star.svg';
import { Slide } from 'react-awesome-reveal';
const Hero = () => {
  return (
    <div>
      <HeroWrapper id="hero">
        <Container>
          <Row>
            <Slide direction="left">
              <div>
                <h1>design your dream home</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  scelerisque accumsan, a vestibulum eget velit.
                </p>
                <Button>explore Gallery</Button>
              </div>
            </Slide>
            <div>
              <Slide direction="right">
                <img src={img} width="100%" alt="" />
              </Slide>
            </div>
          </Row>
        </Container>
        <Marquee className="marq">
          <span className="txt">modern design</span>
          <img src={star} width="100" alt="" />
          <span className="txt">modern design</span>
          <img src={star} width="100" alt="" />
        </Marquee>
      </HeroWrapper>
    </div>
  );
};

export default Hero;
