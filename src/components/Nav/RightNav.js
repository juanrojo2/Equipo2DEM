import React from "react";
import styled from "styled-components";

const UL = styled.ul`
  z-index: 300;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 15px 10px;
  }
  a {
    color: rgba(0, 0, 0);
  }
  input {
    margin: 8px 10px 0px 10px;
  }
  @media (max-width: 1100px) {
    flex-flow: column nowrap;
    background-color: whitesmoke;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 4rem;
    transition: transform 0.3s ease-in-out;
    li,
    a {
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <UL open={open}>
      <li></li>
      <li>Nombre de usuario</li>
      <hr />
      <li>
        <a href="/PagPrincipal">Tus Libros </a>
      </li>
      <li>
        <a href="/PagNotas">Tus Notas</a>
      </li>
      <li>
        <a href="/PagComentarios">Tus Comentarios </a>
      </li>
      {/* <li>
        <a href="/PagCargar">Cargar Libros </a>
      </li> */}
      <hr />
      <li>
        <a href="/Login">Cerrar Sesión </a>
      </li>
    </UL>
  );
};
export default RightNav;
