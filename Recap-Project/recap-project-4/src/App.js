import './App.css';
import Form from './components/Form/index';
// import {useState} from "react" Aufgabe 1
import {uid} from "uid"
import List from './components/List/index';
import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState } from 'react';

function App() {
  // Why setting state in App.js? Possible answer: Parent element of Form.js. Here we want to change the state while
  // displaying the new activity
// setting state for the weather (line30 and line 102). Returns a Boolean. If the weather is good then we display the good weather activities, vice versa.
// setting state for the temperature. Will be displayed as a number next to the condition which is displayed as a weather emoji.

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
    
    //to set an interval you need the following build up. The interval variable consists of a function that has a callbackfunction and a delay in miliseconds as arguments.
      const interval = setInterval(fetchWeather, 5000)
      return () => clearInterval(interval)
    }, [])
    // if there is a dependency in the dependency array the effect will run again when the dependency undergoes change. If its empty it will run once when the component mounts(added to the DOM)
   


   //here we set up the new activity
   function handleAddActivity(newActivity) {
    //understanding of the following line: the function setActivities is setting the newActivity, passing a unique id to it while creating 
    // an object and adding with the spread operator the newActivity to the other activities into an array of objects
      // setActivities([{newActivity, id: uid()}, ...activities])

      setActivities([{...newActivity, id: uid()}, ...activities])
   }


  //setting const isGoodWeather and also for isBadWeather for bad weather
   const isGoodWeather = true;
  //  const isBadWeather = false;

  //filtering the activities for good weather + practising different function writings

  //anonymous function with implicit return
  const filteredActivities = activities.filter((activity) => activity.isForGoodWeather === weather)

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

  // function filteredGoodWeatherActivities (isGoodWeather) {
  // return activities.filter((activity) => {
  //   if (activity.isForGoodWeather === isGoodWeather) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // })}

  //Here I filter for all activities that have the key: isForGoodWeather === false
  // const filteredBadWeatherActivities = activities.filter((activity) => activity.isForGoodWeather === isBadWeather)


  //Here I create the functionality of the button element in the List/index.js. id serves as a argument which is used to identify the activities. 
  // The setActivities will filter all activities for the activities that don't have the id that belongs to the pushed delete button. Because of that we need the strict inequality operator.
  // In line 116, 127 and 133 the function is passed as a prop (onDeleteActivity) to the List element in List/index.js. return ist hier nicht notwendig
  function handleDeleteActivity (id) {
    return setActivities(activities.filter((activity) => activity.id !== id));
  }


  return (
    <div className="App">
      <>
      {/* Here I use ternary operator to define if else. If the weather is good (line28 set as setWeather=data.condition) then the first condition after the "?" displays.
      here in the list all the filtered Good Weather Activities will be displayed (line 76). Also in the isGoodWeather prop the condition is checked with the variable from line 50.
    After the ":" the else case is displayed. Here the bad weather condition. */}
        <h1 className='h1'>
          {condition} {temperature}°C
        </h1>
        
        {/* {weather ? (
          <>
          <h1>
          {condition} {temperature}°C
          </h1>
          <p>Oh happy days! Weather is really good (could be ice cold though). Let's get rolling. You have the following things that you can do:</p>
          <List 
          activities={filteredActivities}
          isGoodWeather = {isGoodWeather}
          onDeleteActivity = {handleDeleteActivity}/>
          </>
          ) : (
            <>
            <h1>
            {condition} {temperature}°C
            </h1>
            <p>Ahhh the weather today seems dreadful(even though it could be damn hot)! But life is good so here are some things to do!</p>
            <List 
            activities={filteredActivities}
            isGoodWeather={isBadWeather}
            onDeleteActivity = {handleDeleteActivity}/>
            </>
          )} */}
      </>
        {/* passing the function handleAddActivity as a prop to the Form component */}
          <p className='text'>{weather ? "Oh happy days! Weather is really good (could be ice cold though). Let's get rolling. You have the following things that you can do:" : "Ahhh the weather today seems dreadful! But life is good so here are some things to do!"}</p>
          <List activities={filteredActivities} onDeleteActivity={handleDeleteActivity}/>
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} onDeleteActivity = {handleDeleteActivity}/>
    </div>
  );
}

export default App;
