import React, { useState } from "react";

const Footer = (props) => {
  const { date, url } = props;
  return (
    <div className="footer">
      <div>{date}</div>
      <div>{url}</div>
    </div>
  );
};

export default Footer;
