import React, {useState, useEffect} from 'react'
import ToDoItem from './ToDoItem';


function ToDoList() {
    const [ToDo, setToDo] = useState([])
    const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
    
  useEffect(()=>{
        fetch("http://localhost:3000/ToDo")
        .then((r)=> r.json())
        .then((ToDo)=> setToDo(ToDo))
    }, [ToDo]);

    function handleDelete() {
        const deleteToDo = ToDo.filter((ToDo) => ToDo.id !== ToDo.id);
        setToDo(deleteToDo);
      }
    
    function toggleComplete(id) {
        let updatedTodos = [...ToDo].map((ToDo) => {
          if (ToDo.id === id) {
            ToDo.completed = !ToDo.completed;
          }
          return ToDo;
        });
        setToDo(updatedTodos);
      }
    

  function handleAddToDo(e) {
    e.preventDefault();
    const ToDo = {activity, duration };
    fetch("http://localhost:3000/ToDo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ToDo),
    });
  }
  
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleAddToDo}>
        <div className="inline fields"  >
          <input 
            type="activity" 
            name="activity"
            required
            value={activity}
            onChange={(e) => setActivity(e.target.value)} />
          <input 
            type="text" 
            name="duration" 
            placeholder="duration" 
            value={duration}
            onChange={(e) => setDuration(e.target.value)}  />
           <button className="ui button" type="submit">
          Add ToDo
        </button>
        <div>
       <ToDoItem ToDo={ToDo} onDelete={handleDelete} onClick={toggleComplete}/>
        </div>
        </div>
      </form>
    </div> 
)
}

export default ToDoList;
