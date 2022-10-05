import React from 'react';
import Card from './Card'

function ToDoItem({ToDo, onDelete, onClick}) {

  return(
    <div className="listItem">
        {ToDo.map((ToDo) => {
          return <Card key={ToDo.id} ToDo={ToDo} onDelete={onDelete} onClick={onClick}/>})}
    </div>
  )  

}

export default ToDoItem;