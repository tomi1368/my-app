"use client";

import { useState } from "react";
import Input from "./Input";
import Row from "./Row";

const Table = ({ data }: { data: any[] }) => {
  const [filteredData, setFilteredData] = useState(data);
  return (
    <>
      <Input users={data} setFilteredData={setFilteredData}></Input>
      <div className="table">
        <div className="row">
          <div className="title-container">
            <h2>ID</h2>
          </div>
          <div className="title-container">
            <h2>Name</h2>
          </div>
          <div className="title-container">
            <h2>Username</h2>
          </div>
          <div className="title-container">
            <h2>Phone</h2>
          </div>
        </div>
        {filteredData.map((item) => {
          return <Row key={item.id} item={item}></Row>;
        })}
      </div>
    </>
  );
};

export default Table;
