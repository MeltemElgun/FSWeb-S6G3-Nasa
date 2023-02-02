import React from "react";
import "./Body.css";
const Body = (props) => {
  const { explanation, url, title } = props;
  return (
    <div className="body">
      <h1 className="textBody"> {explanation}</h1>
      <p className="titleBody">{title}</p>
      <img
        style={{ width: "500px", height: "550px" }}
        className="imgNasa"
        src={url}
        alt="nasa"
      />
    </div>
  );
};

export default Body;
