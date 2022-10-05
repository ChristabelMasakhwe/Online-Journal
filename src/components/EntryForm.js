
import React, { useState, useEffect } from "react";
import EntryList from "./EntryList";

function EntryForm() {
  const [entries, setEntries] = useState([]);
  const [story, setStory] = useState("");

  const getEntries = async () => {
    const myentries = await fetch("http://localhost:8000/entry").then((r) =>
      r.json()
    );
    setEntries(myentries);
  };

  useEffect(() => {
    getEntries();
  }, []);

  const handleChange = (e) => {
    setStory(e.target.value);
  };

    
  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = {
      date: new Date().toLocaleDateString(),
      content: story,
    };
    fetch("http://localhost:8000/entry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    })
      .then((r) => r.json())
      .then((r) => {
        setEntries([...entries, r]);
      });
  };
  const cardStyles2 = {
    margin: "0 auto",
    height: "450px",
    backgroundColor: "white",
    color: "rgb(165, 109, 36)",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1616587607568-f7f651637644?ixlib=rb-1.2.1&dl=laura-adai-MpKiQTIJTP8-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative"
  };
  return (
    <div className="form-container" style={cardStyles2}>
       <h2>Write my story...</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="entry"
            placeholder="Type it away..."
            value={story}
            onChange={handleChange}
          />
        </div>
        <EntryList entries={entries} />
        <div>
          <button>Add Entry</button>
        </div>
      </form>
    </div>
  );
}

export default EntryForm;

