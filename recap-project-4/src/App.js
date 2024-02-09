// import './App.css';
import Form from './components/Form';
import {useState} from "react"
import {uid} from "uid"

function App() {
  // Why setting state in App.js? Possible answer: Parent element of Form.js. Here we want to change the state while
  // displaying the new activity
   const [activities, setActivities] = useState([]);

   //here we set up the new activity
   function handleAddActivity(newActivity) {
    //understanding of the following line: the function setActivities is setting the newActivity, passing a unique id to it while creating 
    // an object and adding with the spread operator the newActivity to the other activities into an array of objects
      setActivities([{newActivity, id: uid()}, ...activities])
   }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      {/* passing the function handleAddActivity as a prop to the Form component */}
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}
export default App;
