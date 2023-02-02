import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Body from "./Body";
import Footer from "./Footer";
import axios from "axios";

function App() {
  const [data, setdata] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=IuRL9ix211YbL9XxwXHjm05lJLMkngQJkg2s6uLA"
      )
      .then(function(response) {
        console.log(response.data);
        setdata({
          copyright: response.data.copyright,
          title: response.data.title,
          date: response.data.date,
          explanation: response.data.explanation,
          url: response.data.url,
        });
      });
  }, []);

  const { copyright, date, explanation, title, url } = data;
  return (
    <div className="App">
      <Header head="NASA" />
      <Body date={date} explanation={explanation} url={url} title={title} />
      <Footer date={date} url={url} />
    </div>
  );
}

export default App;
