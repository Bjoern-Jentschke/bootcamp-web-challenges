import Card from "./components/Card";

export default function App() {
  const fruits = [{
    id: 1337,
    name: '🍎 Apple',
    color: 'red'
  },
  {
    id: 1338,
    name: '🍉 Watermelon',
    color: 'green'
  },
  {
    id: 1339,
    name: '🍑 Peach',
    color: 'orange'
  },
  {
    id: 1340,
    name: '🍌 Banana',
    color: 'yellow'
  }];

  return (
    <div className="app">
      {/* <Card name="🍌 banana" /> */}
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color}/>
      ))}
    </div>
  );
}
