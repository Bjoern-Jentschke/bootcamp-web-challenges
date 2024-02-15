import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";


//here I create an array of objects with all my room as objects. isOn is set all on true to simulate how life is when all lights are on
const initialLight = [
  { name: "Living Room", isOn: true, id: "1" },
  { name: "Kitchen", isOn: true, id: "2" },
  { name: "Bedroom", isOn: true, id: "3" },
  { name: "Bathroom", isOn: true, id: "4" },
  { name: "Garage", isOn: true, id: "5" },
  { name: "Porch", isOn: true, id: "6" },
  { name: "Garden", isOn: true, id: "7" },
  { name: "Office", isOn: true, id: "8" },
];


export default function App({ Component, pageProps }) {
//here I lift the state to the _app.js because from there on I am cascading down to all the children! 
// To pass them the here set props we need to drill em hard
  const [lights, setLights] = useState(initialLight);

  //in this function we define how the new object in our new array should look after the click on the button. 
  // so we pass a parameter here (lightID) this one will be our id in the Light.js. Then we set the state
  // setLights(). If the light.id is same to our clicked id, then it creates a new object with ...light(that spreads the existing
  // key name and id into the object and we turn around the isOn value with the !. If the light.id is not the id we just return the 
  // existing light array)
  function toggleLight(lightID) {
    setLights(
      lights.map((light) => 
      light.id === lightID ? {...light, isOn: !light.isOn} : light) 
    )
  }

//here I map over the initialLight array to create a number with which I can use the reduce method to count how many lights 
// are turned on. I use a if else statement here, comes just in handy enough. 
// With the reduce statement I then set a current value a, which is updated by b which represents the turned on lights. So in the beginning
// a = 0.

  const countLights = (lights.map((light) => {
    if (light.isOn === true) {
      return 1;
    } else {
      return 0;
    }
  }))
  // console.log(countLights)

  const countSum = countLights.reduce((a, b) => a + b);

  //in the following functions I define how all the lights are shut off respectively on. for that I again use the 
  // map method to restructure the array (always a copy of the initial array), so that all lights are on respectively out.
  // I then update the state with this array.

  function lightsOn () {
    const lightsOn = lights.map((light) => ({...light, isOn: true}));
    setLights(lightsOn)
};
  function lightsOff () {
    const lightsOff = lights.map((light) => ({...light, isOn: false}));
    setLights(lightsOff)
};



  // Embrace the bonus --> dim the light
  // Here I filter (iterating through every single object in my array) through my array. If the single object (light) isOn === true,
  // the function returns the isOn. With the .length I can check now how big the array is after filtering. If its zero all lights are turned of.

  //variant 1:
  // const isDimmed = lights.filter((light) => light.isOn).length === 0;

  //here more explicit variant 2:
  // const isDimmed = lights.filter((light) => {
  //   if (light.isOn === true) {
  //     return light.isOn;
  //   } else {
  //     return false;
  //   }
  // }).length === 0;

  //variant 3: even more explicit:
  const filteredDimmed = lights.filter((light) => {
    if (light.isOn === true) {
      return light.isOn;
    } else {
      return false;
    }
  });

  const isDimmed = filteredDimmed.length === 0;

    //or: (here its just vice versa logic --> if light is off (light.isOn === false))

  // const isDimmed = lights.filter((light) => light.isOn === false).length === 8;



 
//here I drill down my props
  return (
    <Layout isDimmed = {isDimmed}>
      <GlobalStyle />
      <Component {...pageProps} 
      lights = {lights}
      onToggle = {toggleLight}
      countSum = {countSum}
      lightsOff = {lightsOff}
      lightsOn = {lightsOn}
      />
    </Layout>
  );
}
