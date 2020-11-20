import React from "react";
import styled from "styled-components";
import Burguer from "./Burguer";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid grey;
  padding: 0 20px;
  display: flex;
  background-color: whitesmoke;
  justify-content: space-between;
  z-index: 200;
  position: fixed;
  top: 0px;
  .logo {
    padding: 13px 0;
    font-size: 20px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">Bokla</div>
      <Burguer />
    </Nav>
  );
};
export default Navbar;
