import "./List.css";

export default function List ({activities, onDeleteActivity}) {
    return (
        <ul>
            {/* here all activities that are created (look in App.js line 44) are mapped as a new array. Every activity has its own key(the id) and an activity name.
            Also there is a delete button which works with an onClick event with a function as an argument (Line 96 App.js) if you dont pass the activity which is deleted as a argument,
            the id stays undefined so the activity can not be deleted.*/}
        {activities.map((activity) => (
        <li className="list" key={activity.id}>{activity.name}{" "}
            <button className="button_delete" onClick={() => onDeleteActivity(activity.id)} type="button">
            ❌
            </button>
        </li>))}
    </ul>
    )
}