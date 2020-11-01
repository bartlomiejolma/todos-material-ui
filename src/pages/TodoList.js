import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Modal,
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

const AddTodo = () => {
  return "Add todo";
};
const sampleTodo = {
  title: "foo",
  description: "lorem lipsum",
};
const TodoList = () => {
  const [todos, setTodos] = useState([sampleTodo]);
  const [addModalOpen, setAddModalOpen] = useState(false);

  const handleAddClose = () => setAddModalOpen(false);

  const addTodoClicked = () => setAddModalOpen(true);

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
            <Modal open={addModalOpen} onClose={handleAddClose}>
              <AddTodo />
            </Modal>
          </Grid>
        </Grid>
      </Grid>

      <GridPadding />
    </Grid>
  );
};

export default TodoList;
