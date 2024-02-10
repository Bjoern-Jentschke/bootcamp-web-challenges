import "./Form.css";

export default function Form({onAddActivity}) {

    function handleSubmit(event) {
        event.preventDefault();
     // after preventing the default behaviour of the form element we grab the information of the form element 
     //into variables
        const form = event.target;
        const name = event.target.elements.name.value;
        const activity = event.target.elements.activity.checked; // checked prevents default behavior (on)

        const newActivity = {name: name, isForGoodWeather: activity} //in newActivity we store the created object
        // console.log(newActivity)
        onAddActivity(newActivity) //with the call of the onAddActivity prop we can create a new Object with the changed state in the App.js
        
        form.reset();
        form.name.focus();

    }

  return (
    <form  onSubmit={handleSubmit} name="Activity">
      <h2>Add new Activity: </h2>
      <div>
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" name="name" aria-label="name input field"></input>
      </div>
      <div>
        <label htmlFor="activity">Good-weather activity: </label>
        <input id="activity"  type="checkbox" name="activity" aria-label="good weather activity checkbox"></input>
      </div>
      <button type="submit" aria-label="submit button">Submit</button>
    </form>
  );
}
