import React from "react";
import styled from "styled-components";

const SC_body = styled.body`
  background-color: rgba(0, 0, 0, 0.81);
  padding: 0 50vh;
  color: aliceblue;
`;
const SC_p1 = styled.p`
  margin: auto;
  padding-top: 30vh;
  font-size: 20px;
`;
const SC_p2 = styled.p`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  padding: 10vh;
  color: aliceblue;
`;
const SC_img = styled.img`
  border-radius: 20px;
  padding-bottom: 5vh;
`;
const Body = (props) => {
  const { explanation, url, title } = props;
  return (
    <SC_body>
      <SC_p1> {explanation}</SC_p1>
      <SC_p2>{title}</SC_p2>
      <SC_img
        style={{ width: "500px", height: "550px" }}
        className="imgNasa"
        src={url}
        alt="nasa"
      />
    </SC_body>
  );
};

export default Body;
