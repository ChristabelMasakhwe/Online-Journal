
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './App.css';
import 'react-calendar/dist/Calendar.css';
import ToDoList from './ToDoList';

function App() {
  const [date, setDate] = useState(new Date());
  const [toDoList, setToDoList] = useState([])

  const appStyles = {
    backgroundColor: "rgb(165, 109, 36)",
    textAlign: "center",
    padding: "20px",
    fontSize: "larger"
  }
  const calStyles = {
    float: "left"
  }
 

useEffect(()=>{
    fetch("http://localhost:3000/ToDo")
    .then((r)=> r.json())
    .then((toDoList)=> setToDoList(toDoList))
}, []);


  return (
    <div className='app' style={appStyles}>
      <div className='calendar-container'style={calStyles} >
      <h2 className='text-center'>My Calendar</h2>
      <Calendar onChange={setDate} value={date} />
        <p className='text-center'>
        <span className='bold'> Today: </span>{' '}
        {date.toDateString()}
        </p>
      </div>
      {toDoList.map((toDoList)=>{
       return <ToDoList {...toDoList}/>})}
    </div>
  );
}

export default App;