import React from "react";
import "./styles.css";

export default function App() {
  const disabled = false;
  return <Button color="orange" disabled={disabled} text="Push Me Pls"/>;
}

function Button({ color, disabled, text }) {
  return (
    <button onClick={() => alert("You clicked me")} style={{ color: color, height: "100px", width: "100px" }} disabled={disabled}>
      {text}
    </button>
  );
}