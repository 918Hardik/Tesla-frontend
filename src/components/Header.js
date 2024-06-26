import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a href="https://www.tesla.com/">
        <img src="/images/logo.svg" alt="Tesla" />
      </a>
      <Menu>
        <a href="#">MODEL S</a>
        <a href="#">MODEL 3</a>
        <a href="#">MODEL X</a>
        <a href="#">MODEL Y</a>
      </Menu>
      <RightMenu>
        <a href="#">SHOP</a>
        <a href="#">TESLA ACCOUNT</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade In</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Model 3</a></li>
        <li><a href="#">Model X</a></li>
        <li><a href="#">Model Y</a></li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 5px 1px;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    padding: 0px 10px;
    text-transform: uppercase;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  z-index: 16;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: aliceblue;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
  height: 100vh;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
