import { useState } from 'react';
import { uid } from 'uid';
import './App.css';
import Form from './components/Form';

function App() {
     // why do we need to set state here? possible answer: because through creating a new activity we need to adapt
     // the state in the parent element.

    const [activities, setActivities] = useState([]);
       
    function handleAddActivity(newActivity) {
          // why do we need brackets and curly brackets here? possible answer: because we need an object of arrays here?
       setActivities([{newActivity, id: uid()}, ...activities])
       //possible understanding: in the setActivities function: an new object in an array is created, which 
       // displays a newActivity(property)and adds a new unique id with the uid() function and then uses 
       // the spread operator to add the other element of the array)
    }
  return (
    <Form onAddActivity={handleAddActivity} />
  );
}

export default App;
