import React from "react";

const Cat = ({ cat }) => {
  return (
    <div>
      <h2>Cat Page</h2>
      <div>{cat.name}</div>
      <div>{cat.age}</div>
      <div>{cat.color}</div>
    </div>
  );
};

export default Cat;
