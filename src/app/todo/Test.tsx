"use client";
import React, { useState } from "react";

const Test = () => {
  type student = {
    name: string;
    age?: number | string;
    gender?: string;
    graguation?: boolean | number;
  };

  const [students, setStudents] = useState<student[]>([
    { name: "aditya", age: 25, gender: "male" },
    { name: "faizan", gender: "male" },
    { name: "rajat", age: 22, gender: "male" },
    { name: "kuldeep", age: 24 },
  ]);

  const deletehandler = (id: number, data: student) => {
    console.log("data", data);
    students.splice(id, 1);
    setStudents([...students] );
    console.log("students data", students);
  };
  return (
    <div style={{ width: "100%" }}>
      {students?.map((data, id) => (
        <div key={id} style={{ display: "flex", flexDirection: "row" }}>
          <p>{`${data.name}`}</p>
          <p>Age: {data.age}</p>
          <p>Gender: {data.gender}</p>
          <div style={{ marginLeft: "20px" }}>
            <p
              style={{
                backgroundColor: "lightcoral",
                padding: "3px 5px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={(e) => deletehandler(id, data)}
            >
              delete
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Test;
