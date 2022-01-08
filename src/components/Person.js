import React from "react";

const Person = ({ person }) => {
  return (
    <div>
      <h2>Person Page</h2>
      <div>{person.name}</div>
      <div>{person.fullName}</div>
      <div>{person.age}</div>
    </div>
  );
};

export default Person;
