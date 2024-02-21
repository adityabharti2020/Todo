import React from "react";
import Add_Todo from "./todo/Add_Todo";
import Test from "./todo/Test";
import { prisma } from "@/db";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import TodoPage from "./new/page";
// prisma.todo.create({
//   data: {
//     title: "test",
//     complete: false,
//   },
// });
function gettodos() {
  return prisma.todo.findMany();
}
const page = async () => {
  const todos = await gettodos();

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          mt: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "40%",
            alignItems: "baseline",
          }}
        >
          <Typography variant="h4">Todos</Typography>
          <Link
            href="/new"
            style={{
              textDecoration: "none",
              display: "flex",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                p: 2,
                bgcolor: "slategray",
                borderRadius: "5px",
                color: "white",
              }}
            >
              New
            </Typography>
          </Link>
        </Box>
      </Box>
      <ul>
        {todos?.map((todo) => (
          <TodoPage key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};

export default page;
