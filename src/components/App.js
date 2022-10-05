
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './App.css';
import 'react-calendar/dist/Calendar.css';
import ToDoList from './ToDoList';
import EntryForm from './EntryForm';


function App() {
  const [date, setDate] = useState(new Date());
 
const appStyles = {
    backgroundColor: "rgb(165, 109, 36)",
    textAlign: "center",
    padding: "20px",
    fontSize: "larger",
    height: "150vh"
  }
 
  return (
    <div className="flex-container" style={appStyles}>
      <h2 style={{fontSize: "small"}}>MY JOURNAL</h2>
      <div className="flex-item">
        <div className="calendar-container">
          <h2 className="text-center">My Calendar</h2>

          <Calendar onChange={setDate} value={date} />

          <p className="text-center">
            <span className="bold"> Today: </span> {date.toDateString()}
          </p>
        </div>
      </div>
      <div className="flex-item">
        <ToDoList />
      </div>
      <div className="flex-item">
        <EntryForm />
      </div>
      </div>
  )
}

export default App;