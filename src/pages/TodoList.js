import { Grid } from "@material-ui/core";
import { useState } from "react";

const Todo = ({ todo }) => todo;
const EmptyTodoList = () => "Empty";
const GridPadding = () => <Grid item xs={0} sm={2}></Grid>;

const TodoList = () => {
  const [todos, setTodos] = useState([1]);

  if (todos.length === 0) {
    return <EmptyTodoList />;
  }
  return (
    <Grid container>
      <GridPadding />
      <Grid item xs={12} sm={8}>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </Grid>

      <GridPadding />
    </Grid>
  );
};

export default TodoList;
