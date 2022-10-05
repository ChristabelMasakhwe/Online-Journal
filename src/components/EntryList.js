import React from "react";
import { EntryItem } from "./EntryItem";

export const EntryList = (props) => {
  const entries = props.entries;

  return (
    <div>
      {entries.map((entry) => {
        return <EntryItem key={entry.id} entry={entry} />;
      })}
    </div>
  );
};