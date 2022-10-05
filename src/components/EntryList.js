import React from "react";
import  EntryItem  from "./EntryItem";

const EntryList = ({entries}) => {
 
  return (
    <div>
   {entries.map((entry) => {
        return <EntryItem key={entry.id} entry={entry} />
      })}
   </div>
  )
};

export default EntryList;