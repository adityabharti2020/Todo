import React from "react";
type TodoPageProps = {
  id: string;
  title: string;
  complete: Boolean;
};

const TodoPage = ({ id, title, complete }: TodoPageProps) => {
  //   console.log("todo list", todo);
  return (
    <>
      <li></li>
    </>
  );
};

export default TodoPage;
