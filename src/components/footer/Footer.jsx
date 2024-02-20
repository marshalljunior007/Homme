import React from 'react';
import { Container, SectionWrapper } from '../../GlobalStyle';
import {
  FooterCon,
  FooterWrap,
  ServiceCon,
  Socials,
  SocialsCon,
} from './FooterStyle';
import logo2 from './../../images/logo2.png';
import footsvg from './../../images/footer.svg';
import social1 from './../../images/insta.png';
import social2 from './../../images/twitter.png';
import social3 from './../../images/facebook.png';
import social4 from './../../images/youtube.png';

const Footer = () => {
  return (
    <div>
      <img src={footsvg} width="100%" />
      <FooterWrap>
        <Container>
          <FooterCon>
            <div className="col1">
              <img src={logo2} width="120px" />
              <p>Beautiful design is welcoming</p>
            </div>
            <ServiceCon>
              <div>
                <h3>Services</h3>
                <ul>
                  <li>space redesign</li>
                  <li>Product Purchase</li>
                </ul>
              </div>
              <div>
                <h3>Showcase</h3>
                <ul>
                  <li>Residential Design</li>
                  <li>Corporate Design</li>
                </ul>
              </div>
              <div>
                <h3>Website</h3>
                <ul>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
              <div>
                <h3>Company</h3>
                <ul>
                  <li>Contact Us</li>
                  <li>Careers</li>
                </ul>
              </div>
            </ServiceCon>
          </FooterCon>
          <SocialsCon>
            <Socials>
              <div className="social">
                <a href="#">
                  <img src={social1} alt="" />
                </a>
              </div>
              <div className="social">
                <a href="#">
                  <img src={social2} alt="" />
                </a>
              </div>
              <div className="social">
                <a href="#">
                  <img src={social3} alt="" />
                </a>
              </div>
              <div className="social">
                <a href="#">
                  <img src={social4} alt="" />
                </a>
              </div>
            </Socials>
            <p>Copyrights. All rights reserved.</p>
          </SocialsCon>
        </Container>
      </FooterWrap>
    </div>
  );
};

export default Footer;
