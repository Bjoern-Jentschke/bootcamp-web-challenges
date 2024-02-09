import "./Form.css";

export default function Form() {
  return (
    <form name="Activity">
      <h2>Add new Activity: </h2>
      <div>
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" name="name" aria-label="name input field"></input>
      </div>
      <div>
        <label htmlFor="activity">Good-weather activity: </label>
        <input id="activity"  type="checkbox" name="activity" aria-label="good weather activity checkbox"></input>
      </div>
      <button type="onSubmit" aria-label="submit button">Submit</button>
    </form>
  );
}
