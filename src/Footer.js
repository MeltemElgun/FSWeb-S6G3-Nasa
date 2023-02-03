import React, { useState } from "react";
import styled from "styled-components";

const SC_footer = styled.footer`
  background-image: url(./yıldız.jpg);
  display: flex;
  flex-direction: column;
`;
const SC_p1 = styled.p`
  background-color: gray;
  opacity: 0.6;
`;
const SC_p2 = styled.p`
  background-color: gray;
  opacity: 0.6;
`;
const SC_p3 = styled.p`
  background-color: gray;
  opacity: 0.6;
`;

const Footer = (props) => {
  const { url, date, copyright } = props;
  return (
    <SC_footer>
      <SC_p1>{url}</SC_p1>
      <SC_p2>{date}</SC_p2>
      <SC_p3> {copyright}</SC_p3>
    </SC_footer>
  );
};

export default Footer;
