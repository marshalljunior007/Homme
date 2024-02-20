import React from 'react';
import { Container, Row, SectionWrapper } from '../../GlobalStyle';
import {
  Arrow,
  ArrowIcon,
  Slide,
  SliderCol,
  SliderWrapper,
  Title,
} from './DesignStyle';
import slide1 from './../../images/slide1.png';
import slide2 from './../../images/slide2.png';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useRef } from 'react';
import { Fade } from 'react-awesome-reveal';

const Design = () => {
  const owlRes = useRef();
  const owlCor = useRef();

  return (
    <div>
      <SectionWrapper id="designs">
        <Fade>
          <Container>
            <h2 className="center">explore designs</h2>
            <p className="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
              scelerisque accumsan, a vestibulum eget velit.
            </p>
            <Row style={{ marginTop: 40 }}>
              <SliderCol>
                <SliderWrapper>
                  <OwlCarousel
                    className="owl-theme"
                    loop
                    items={1}
                    nav={false}
                    dots={false}
                    ref={owlRes}
                  >
                    <Slide bg={slide1} />
                    <Slide bg={slide2} />
                  </OwlCarousel>
                  <Arrow>
                    <ArrowIcon onClick={() => owlRes.current.prev()}>
                      <FeatherIcon icon="chevron-left" />
                    </ArrowIcon>
                    <ArrowIcon onClick={() => owlRes.current.next()}>
                      <FeatherIcon icon="chevron-right" />
                    </ArrowIcon>
                  </Arrow>
                </SliderWrapper>
                <Title>
                  <h3>Residential Designs</h3>
                  <hr />
                </Title>
              </SliderCol>

              <SliderCol>
                <SliderWrapper>
                  <OwlCarousel
                    className="owl-theme"
                    loop
                    items={1}
                    nav={false}
                    dots={false}
                    ref={owlCor}
                  >
                    <Slide bg={slide2} />
                    <Slide bg={slide1} />
                  </OwlCarousel>
                  <Arrow>
                    <ArrowIcon onClick={() => owlCor.current.prev()}>
                      <FeatherIcon icon="chevron-left" />
                    </ArrowIcon>
                    <ArrowIcon onClick={() => owlCor.current.next()}>
                      <FeatherIcon icon="chevron-right" />
                    </ArrowIcon>
                  </Arrow>
                </SliderWrapper>
                <Title>
                  <h3>coperate designs</h3>
                  <hr />
                </Title>
              </SliderCol>
            </Row>
          </Container>
        </Fade>
      </SectionWrapper>
    </div>
  );
};

export default Design;
