import React from "react";

const Row = ({ item }: { item: any }) => {
  return (
    <div className="row">
      <div className="title-container">
        <h2>{item.id}</h2>
      </div>
      <div className="title-container">
        <h2>{item.name}</h2>
      </div>
      <div className="title-container">
        <h2>{item.username}</h2>
      </div>
      <div className="title-container">
        <h2>{item.phone}</h2>
      </div>
    </div>
  );
};

export default Row;
