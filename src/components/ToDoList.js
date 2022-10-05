import React, {useState, useEffect} from 'react'
import ToDoItem from './ToDoItem';
import AddTodo from "./AddTodo";


function ToDoList() {
    const [toDos, setToDos] = useState([]);
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
    
    
  const getToDos = async () => {
    const mytodos = await fetch("http://localhost:8000/ToDo").then((r) =>
      r.json()
    );
    setToDos(mytodos);
  };

  useEffect(() => {
    getToDos();
  }, []);

  function handleDelete(id) {
    const newTodos = toDos.filter((todo) => todo.id !== id);
    fetch(`http://localhost:8000/ToDo/${id}`, {
      method: "DELETE",
    });
    setToDos(newTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = toDos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        fetch(`http://localhost:8000/ToDo/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ completed: todo.completed }),
        });
        }
          return todo;
        })
        setToDos(updatedTodos);
      }
      
    function handleAddToDo(e) {
    e.preventDefault();
    const todo = { activity, duration, completed: false };
    fetch("http://localhost:8000/ToDo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    })
      .then((r) => r.json())
      .then((r) => {
        setToDos([...toDos, r]);
        setActivity("");
        setDuration("");
      });
  }

  const cardStyles1 = {
    margin: "0 auto",
    width: "fit-width",
    padding: "20px 30px",
    height: "450px",
    backgroundColor: "white",
    color: "rgb(165, 109, 36)",
  };
      
   return (
    <div style={cardStyles1}>
       <h2>TODO LIST</h2>
      <ul>
        {toDos.map((todo) => {
          return (
            <li key={todo.id}>
              <ToDoItem
                todo={todo}
                onDelete={handleDelete}
                toggleComplete={toggleComplete}
              />
            </li>
          );
        })}
      </ul>
      <div>
        <AddTodo
          activity={activity}
          duration={duration}
          setActivity={setActivity}
          setDuration={setDuration}
          addTodo={handleAddToDo}
        />
      </div>
    </div>
  );
}

export default ToDoList;
