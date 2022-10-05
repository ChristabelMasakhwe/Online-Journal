import React from "react";

const EntryItem = (props) => {
    const entry = props.entry;
    return (
      <div>
        <p>{entry.content}</p>
        <p>{entry.date}</p>
      </div>
    );
  };

  export default EntryItem;