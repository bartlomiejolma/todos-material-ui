import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import { NoteAdd } from "@material-ui/icons";
import { useState } from "react";
import { useForm } from "react-hook-form";

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

const AddTodo = ({ addTodo }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => addTodo(data);

  return (
    <div
      style={{
        width: 400,
        position: "absolute",
        backgroundColor: "white",
        border: "2px solid #000",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column">
          <TextField inputRef={register} name="title" label="Title" />
          <TextField
            inputRef={register}
            name="description"
            label="Description"
          />
          <TextField
            inputRef={register}
            name="date"
            label="Due Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            inputRef={register}
            name="image"
            label="Images"
            type="file"
            accept="image/png, image/jpeg"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <Button type="submit">Save</Button>
        </Grid>
      </form>
    </div>
  );
};
const sampleTodo = {
  title: "foo",
  description: "lorem lipsum",
};
const TodoList = () => {
  const [todos, setTodos] = useState([sampleTodo]);
  const addTodo = (todo) => {
    todos.push(todo);
    setTodos(todos);
    handleAddClose();
  };
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
              <AddTodo addTodo={addTodo} />
            </Modal>
          </Grid>
        </Grid>
      </Grid>

      <GridPadding />
    </Grid>
  );
};

export default TodoList;
