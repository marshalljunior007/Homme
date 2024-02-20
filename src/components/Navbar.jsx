import { Container } from '../GlobalStyle';
import { BtnGrp, Menu, Nav, NavWrapper } from './NavbarStyle';
import logo from '../images/logo.png';
import Button from './button/button';
import FeatherIcon from 'feather-icons-react';
import { useState } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <NavWrapper>
        <Container>
          <Nav>
            <a href="#hero">
              <img src={logo} width="120px" />
            </a>
            <Menu className={show && 'show'}>
              <ul>
                <li>
                  <a href="#designs">Design</a>
                </li>
                <li>
                  <a href="#interior">Interiors</a>
                </li>
                <li>
                  <a href="#case">Case study</a>
                </li>
                <li>
                  <a href="#clients">Clients</a>
                </li>
              </ul>
            </Menu>
            <BtnGrp className={show && 'showBtn'}>
              <Button variant="text">Sign In</Button>
              <Button>sign up </Button>
            </BtnGrp>
            <FeatherIcon
              onClick={() => setShow(!show)}
              icon={show ? 'x' : 'menu'}
              className="menu-icon"
            />
          </Nav>
        </Container>
      </NavWrapper>
    </div>
  );
};

export default Navbar;
