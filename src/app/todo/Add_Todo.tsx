"use client";
import { useState } from "react";

const Add_Todo: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState<string>("");

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    console.log("Todo:", todo);
    setTodo("");
  };
  const deletehandler = (id: Number) => {
    console.log("id", id);
    todos.splice(id.valueOf(), 1);
    setTodos([...todos]);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "40px",
      }}
    >
      <div>
        <h2>TODO NEXT + TYPESCRIPT</h2>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ width: "70%", margin: "0 auto" }}>
            <input
              type="text"
              placeholder="Enter your task"
              value={todo}
              onChange={(e) => inputChangeHandler(e)}
            />
            <button type="submit">Add</button>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {todos?.map((value, id) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <h3>{value}</h3>
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={(e) => deletehandler(id)}
                  >
                    delete
                  </p>
                </div>
              );
            })}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add_Todo;
