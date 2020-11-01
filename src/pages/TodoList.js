import { Grid, IconButton } from "@material-ui/core";
import { NoteAdd } from "@material-ui/icons";
import { useState } from "react";

const Todo = ({ todo }) => todo;
const EmptyTodoList = () => "Empty";
const GridPadding = () => <Grid item xs={0} sm={2}></Grid>;

const TodoList = () => {
  const [todos, setTodos] = useState([1]);

  const addTodoClicked = () => {};

  return (
    <Grid container>
      <GridPadding />
      <Grid item xs={12} sm={8}>
        <Grid container direction="row">
          <Grid item>
            {todos.length === 0 && <EmptyTodoList />}
            {todos.map((todo) => (
              <Todo todo={todo} />
            ))}
          </Grid>
          <Grid>
            <IconButton onClick={addTodoClicked}>
              <NoteAdd />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>

      <GridPadding />
    </Grid>
  );
};

export default TodoList;
