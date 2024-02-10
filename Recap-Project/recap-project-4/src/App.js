// import './App.css';
import Form from './components/Form/index';
// import {useState} from "react" Aufgabe 1
import {uid} from "uid"
import List from './components/List/index';
import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState } from 'react';

function App() {
  // Why setting state in App.js? Possible answer: Parent element of Form.js. Here we want to change the state while
  // displaying the new activity
  //  const [activities, setActivities] = useState([]); Aufgabe 1//
   const [activities, setActivities] = useLocalStorageState("activities", {defaultValue: []});
   const [weather, setWeather] = useState();
   const [temperature, setTemperature] = useState();
   const [condition, setCondition] = useState();


   //fetching the data from the weather API. Adding also error handling with a try and catch statement inside the async function. If there is a error while fetching it will be locked out as
   // a customized error in the console. The useEffect hook helps to deal with side effects in React. The useEffect hook runs after the component has been rendered for the first time. 
   // So in this case the side effect (fetching the API) will be enforced directly after the component is rendered for the first time. (component mounts --> added to the DOM)
   // it prevents infinite loops, performance issues...
   useEffect (() => { 
     async function fetchWeather () {
     try {
      const response = await fetch("https://example-apis.vercel.app/api/weather");
      const data = await response.json();
      setWeather(data.isGoodWeather);
      setTemperature(data.temperature);
      setCondition(data.condition);
      console.log(data);
    } catch (error) {
      console.error('Hay un error Aqui');
    }}
    fetchWeather();
    // if there is a dependency in the dependency array the effect will run again when the dependency undergoes change. If its empty it will run once when the component mounts(added to the DOM)
   }, []);


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

  //Here I filter for all activities that have the key: isForGoodWeather === false
  const filteredBadWeatherActivities = activities.filter((activity) => activity.isForGoodWeather === isBadWeather)


  return (
    <div className="App">
      <>
      {/* Here I use ternary operator to define if else. If the weather is good (line28 set as setWeather=data.condition) then the first condition after the "?" displays.
      here in the list all the filtered Good Weather Activities will be displayed (line 76). Also in the isGoodWeather prop the condition is checked with the variable from line 50.
      After the ":" the else case is displayed. Here the bad weather condition. */}
        {weather ? (
          <>
            <h1>
              {condition} {temperature}°C
            </h1>
            <p>Oh happy days! Weather is really good (could be ice cold though). Let's get rolling. You have the following things that you can do:</p>
            <List activities={filteredGoodWeatherActivities(isGoodWeather)}
            isGoodWeather = {isGoodWeather}/>
          </>
        ) : (
          <>
            <h1>
              {condition} {temperature}°C
            </h1>
            <p>Ahhh the weather today seems dreadful! But life is good so here are some things to do!</p>
            <List 
      activities={filteredBadWeatherActivities}
            isGoodWeather={isBadWeather}/>
          </>
        )}
      </>
        {/* passing the function handleAddActivity as a prop to the Form component */}
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities}/>
    </div>
  );
}

export default App;
