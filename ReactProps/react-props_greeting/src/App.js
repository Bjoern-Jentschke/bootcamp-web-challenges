import "./styles.css";



export default function App() {
  return <Greeting name="Francis" />;
}

function Greeting({name}) {
  return <h1>Hello, {name}!</h1>
}




