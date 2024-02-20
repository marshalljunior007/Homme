import React from 'react';
import { Container, SectionWrapper } from '../../GlobalStyle';
import {
  Arrow,
  ArrowIcon,
  Header,
  IntCol1,
  IntCol2,
  IntRow,
  Line,
  Slide,
} from './InteriorsStyle';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import slide1 from './../../images/slide4.png';
import slide2 from './../../images/slide2.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useRef } from 'react';

const Interiors = () => {
  const owl = useRef();
  return (
    <div>
      <SectionWrapper id="interior">
        <Container>
          <Header>
            <div>
              <h2>intuitive interiors</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                scelerisque accumsan, a vestibulum eget velit.
              </p>
            </div>
            <Arrow>
              <ArrowIcon onClick={() => owl.current.prev()}>
                <FeatherIcon icon="arrow-left" />
              </ArrowIcon>
              <ArrowIcon onClick={() => owl.current.next()}>
                <FeatherIcon icon="arrow-right" />
              </ArrowIcon>
            </Arrow>
          </Header>
          <IntRow>
            <IntCol1>
              <div>
                <h2 style={{ fontWeight: 200 }}>aesthetic office</h2>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
              <Line />
              <div>
                <h3 style={{ fontWeight: 300 }}>conference room</h3>
                <p>8 x 16 Feet</p>
              </div>
            </IntCol1>
            <IntCol2>
              <OwlCarousel
                className="owl-theme"
                loop
                items={1.2}
                nav={false}
                dots={false}
                margin={20}
                ref={owl}
              >
                <Slide bg={slide1} />
                <Slide bg={slide2} />
              </OwlCarousel>
            </IntCol2>
          </IntRow>
        </Container>
      </SectionWrapper>
    </div>
  );
};

export default Interiors;
