import React from "react";
import "./styles.css";

export default function App() {
  return <Attribute />;
}

function Attribute () {
  return <article className="article">
    <h2 className="article__title">Geographie</h2>
    <label id="name" htmlFor>World of Geographie</label>
    <input type="text" id="name"></input>
    <a href="https://de.wikipedia.org/wiki/Geographie">Geographie</a>
  </article>
}
