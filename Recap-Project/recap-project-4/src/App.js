// import './App.css';
import Form from './components/Form/index';
// import {useState} from "react" Aufgabe 1
import {uid} from "uid"
import List from './components/List/index';
import useLocalStorageState from "use-local-storage-state";

function App() {
  // Why setting state in App.js? Possible answer: Parent element of Form.js. Here we want to change the state while
  // displaying the new activity
  //  const [activities, setActivities] = useState([]); Aufgabe 1//
   const [activities, setActivities] = useLocalStorageState("activities", {defaultValue: []});

   //here we set up the new activity
   function handleAddActivity(newActivity) {
    //understanding of the following line: the function setActivities is setting the newActivity, passing a unique id to it while creating 
    // an object and adding with the spread operator the newActivity to the other activities into an array of objects
      // setActivities([{newActivity, id: uid()}, ...activities])

      setActivities([{...newActivity, id: uid()}, ...activities])
   }

  //setting const isGoodWeather and also for isBadWeather for bad weather
   const isGoodWeather = true;
   const isBadWeather = false;

  //filtering the activities for good weather + training different function writings

  //anonymous function with implicit return
  // const filteredGoodWeatherActivities = activities.filter((activity) => activity.isForGoodWeather === isGoodWeather)

  // anonymous function with explicit return

  // const filteredGoodWeatherActivities = activities.filter((activity) => {
  //   return activity.isForGoodWeather === isGoodWeather;
  // })

  // anonymous function with explicit return and if/else statement

  // const filteredGoodWeatherActivities = activities.filter((activity) => {
  //   if (activity.isForGoodWeather === isGoodWeather) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // })

  //named function with filter method and if/else statement and explicit return (important: adding the isGoodWeather const  argument, also down in the list element (line 76))

  function filteredGoodWeatherActivities (isGoodWeather) {
  return activities.filter((activity) => {
    if (activity.isForGoodWeather === isGoodWeather) {
      return true;
    } else {
      return false;
    }
  })}

  const filteredBadWeatherActivities = activities.filter((activity) => activity.isForGoodWeather === isBadWeather)

  return (
    <div className="App">
      <header className="App-header">
      </header>
      {/* passing the function handleAddActivity as a prop to the Form component */}
      <Form onAddActivity={handleAddActivity} />

      <h3>Bad Weather Activity</h3>
      {/* Add a list element for good weather as well as for bad weather:
      the activities which we defined in our state and filtered in GoodWeatherActivities as well as BadWeatherActivities are going to be displayed here separately*/}
      <List 
      activities={filteredBadWeatherActivities}
            isGoodWeather={isBadWeather}
      />
      <h3>Good Weather Activity</h3>
      <List activities={filteredGoodWeatherActivities(isGoodWeather)}
            isGoodWeather = {isGoodWeather}/>
    </div>
  );
}
export default App;
