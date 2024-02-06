import React from "react";
import "./styles.css";

export default function App() {
  const disabled = false;
  return <Button color="orange" disabled={disabled} text="Push Me Pls" onBut={handleButton}/>
}

function Button({ color, disabled, text, onBut }) {
  return (
    <button style={{ color: color, height: "100px", width: "100px" }} disabled={disabled} onClick = {onBut}>
      {text}
    </button>
  );
}

function handleButton() {
  alert("You clicked me")
}