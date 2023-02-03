import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Body from "./Body";
import Footer from "./Footer";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [tarih, setTarih] = useState("2023-02-03");
  const changeHandler = (e) => {
    setTarih(e);
  };
  /* useEffect(()=>{
    axios.get ('https://api.nasa.gov/planetary/apod?date='+tarih+'&api_key=wMulJJXgW7eBvlMNcmIcN3vvIySVmaepy8Kms0GQ')
      .then(res=>
        {setData(res.data)})
  }, [tarih]) */

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?date=" +
          tarih +
          "&api_key=wMulJJXgW7eBvlMNcmIcN3vvIySVmaepy8Kms0GQ"
      )
      .then(function (response) {
        console.log(response.data);
        setData({
          copyright: "Meltem Elgün",
          title: response.data.title,
          date: response.data.date,
          explanation: response.data.explanation,
          url: response.data.url,
        });
      });
  }, [tarih]);

  const { copyright, date, explanation, title, url } = data;
  return (
    <div className="App">
      <Header head="NASA" tarih={tarih} changeHandler={changeHandler} />
      <Body explanation={explanation} url={url} title={title} />
      <Footer date={date} url={url} copyright={copyright} />
    </div>
  );
}

export default App;
