import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Add Music</Button>
      <Button>Start Music</Button>
      <Button>Stop Music</Button>
      <Button>Delete Music</Button>
    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
