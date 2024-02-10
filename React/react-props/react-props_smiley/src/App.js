import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={true}/>;
}

function Smiley({isHappy}) {
  return <article>{isHappy ? <span>🙂</span> : <span>😞</span>}</article>
}