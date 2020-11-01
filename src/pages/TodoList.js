import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { NoteAdd } from "@material-ui/icons";
import { useState } from "react";

const Todo = ({ todo }) => {
  return (
    <Card>
      <CardHeader title={todo.title} />
      <CardMedia image={todo.image} />
      <CardContent>
        <Typography variant="h6">{todo.description}</Typography>
      </CardContent>
    </Card>
  );
};
const EmptyTodoList = () => "Empty";
const GridPadding = () => <Grid item xs={0} sm={2}></Grid>;

const sampleTodo = {
  title: "foo",
  description: "lorem lipsum",
};
const TodoList = () => {
  const [todos, setTodos] = useState([sampleTodo]);

  const addTodoClicked = () => {};

  return (
    <Grid container>
      <GridPadding />
      <Grid item xs={12} sm={8}>
        <Grid container direction="column">
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
