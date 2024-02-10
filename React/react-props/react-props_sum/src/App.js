import React from "react";
import "./styles.css";

export default function App() {
  return <div><Sum valueA={8} valueB={12}/>
  <Sum valueA={8} valueB={12}/>
  <Sum valueA={8} valueB={12}/>
  </div>
}

function Sum({ valueA, valueB }) {
  const sum = valueA+valueB;
  return <h1>{valueA} + {valueB} = {sum}</h1>
}
