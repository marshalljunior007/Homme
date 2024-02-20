import React from 'react';
import { Container, SectionWrapper } from '../../GlobalStyle';
import { Caseimg, Desc, Header } from './CaseStudyStyle';
import img1 from '../../images/caseStudy.png';

const CaseStudy = () => {
  return (
    <div>
      <SectionWrapper id="case">
        <Container>
          <Header>
            <h1>case study</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
              scelerisque accumsan, a vestibulum eget velit.
            </p>
          </Header>
          <Caseimg bg={img1} />
          <Desc>
            <h3 style={{ fontWeight: 600 }}>Lounge Re-design</h3>
            <a href="#">learn more</a>
          </Desc>
        </Container>
      </SectionWrapper>
    </div>
  );
};

export default CaseStudy;
