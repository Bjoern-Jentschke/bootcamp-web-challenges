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
    <form  className="form" onSubmit={handleSubmit} name="Activity">
      <h2 className="h2">Add new Activity: </h2>
      <div className="input">
        {/* duch Verknüpfung von htmlFor und id kein aria-label nötig */}
        <label className="input__label" htmlFor="name">Name: </label>
        <input className="input__field" id="name" type="text" name="name" aria-label="name input field"></input>
      </div>
      <div className="check">
        <label className="check__label" htmlFor="activity">Good-weather activity: </label>
        <input className="check__check" id="activity"  type="checkbox" name="activity" aria-label="good weather activity checkbox"></input>
      </div>
      <button className="button" type="submit" aria-label="submit button">Submit</button>
    </form>
  );
}
