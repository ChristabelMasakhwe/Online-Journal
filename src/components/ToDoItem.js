import React from 'react';

export default ToDoItem;function ToDoItem({ todo, onDelete, toggleComplete }) {
    return (
      <div>
        <span>{todo.activity}</span>
        <span>{todo.duration}</span>
        <span>
          <button onClick={() => onDelete(todo.id)}>x</button>
        </span>
        <span>
          <input
            type="checkbox"
            id="completed"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
        </span>
      </div>
    )}