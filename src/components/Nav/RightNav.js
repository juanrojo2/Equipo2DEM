import React from "react";
import styled from "styled-components";

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 15px 10px;
  }
  @media (max-width: 900px) {
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
    li {
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <UL open={open}>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <li></li>
      <li>Nombre de usuario</li>
      <hr />
      <li>Tus libros</li>
      <li>Tus notas</li>
      <li>Tus comentarios</li>
      <li>Cargar Libros</li>
      <hr />
      <li>Cerrar Sesión</li>
    </UL>
  );
};
export default RightNav;
