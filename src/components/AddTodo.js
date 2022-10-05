export const AddTodo = (props) => {
    const activity = props.activity;
    const duration = props.duration
    const setActivity = props.setActivity;
    const setDuration = props.setDuration;
    const addTodo = props.addTodo
  
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={addTodo}>
          <div className="inline fields">
            <input
              type="activity"
              name="activity"
              placeholder="activity"
              required
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            />
            <input
              type="text"
              name="duration"
              placeholder="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <button className="ui button" type="submit">
              Add ToDo
            </button>
          </div>
        </form>
      </div>
    );
  };