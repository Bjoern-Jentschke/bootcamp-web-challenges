import React from "react";
import "./styles.css";
import Box from "./components/Box";

export default function App() {
  return <Boxes />;
}

function Boxes () {
  return <>
      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
  </>
}