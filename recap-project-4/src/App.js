// import './App.css';
import Form from './components/Form';
import {useState} from "react"
import {uid} from "uid"

function App() {
   const [activities, setActivities] = useState([]);

   function handleAddActivity(newActivity) {
      setActivities([{newActivity, id: uid()}, ...activities])
   }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}
export default App;
