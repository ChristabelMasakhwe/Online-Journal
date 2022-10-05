import React from 'react'
import Card from './Card';


function ToDoList(props) {

return(
    <div className='todoList' key={props.toDoList.id}>
        <ol>
            <li>{props.toDoList.activity}<br/><span>{props.toDoList.duration}</span></li>
            </ol>
      <Card  />
    </div>
)
}

export default ToDoList;