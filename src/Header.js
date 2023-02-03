import React from "react";
import { FaRocket } from "react-icons/fa";
import styled from "styled-components";

const SC_header = styled.header`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-image: url(./yıldız.jpg);
  height: 20vh;
  position: fixed;
  width: 100vw;
`;

const SC_title = styled.title`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: aliceblue;
`;
const SC_navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const SC_a = styled.a`
  text-decoration: none;
  padding: 1.4px 50px;
  color: azure;
`;
const SC_input = styled.input`
  background-color: rgba(109, 113, 121, 0.642);
  height: 30px;
`;

const Header = (props) => {
  const { head, changeHandler, date } = props;
  return (
    <SC_header>
      <SC_title>
        <img style={{ width: 150, height: 90 }} src="logo.png" alt="resim" />
        <h1 style={{ fontSize: "70px" }}>{head}</h1>
        <SC_input
          value={date}
          onChange={(event) => changeHandler(event.target.value)}
          name="date"
          type="date"
        />
      </SC_title>
      <SC_navbar>
        <FaRocket size="20" />
        <SC_a href="https://www.nasa.gov/"> NASA RESMİ SAYFA </SC_a>
      </SC_navbar>
    </SC_header>
  );
};

export default Header;
