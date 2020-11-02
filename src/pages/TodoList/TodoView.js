import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  IconButton,
} from "@material-ui/core";
import {
  CheckBox,
  CheckBoxOutlineBlank,
  Delete,
  Search,
} from "@material-ui/icons";

const TodoView = ({ todo, modifyTodo, deleteTodo }) => {
  const toggleCompleted = () => {
    todo.completed = !todo.completed;
    modifyTodo(todo);
  };
  return (
    <Card>
      <CardHeader
        title={todo.title}
        action={
          <IconButton onClick={toggleCompleted}>
            {todo.completed ? <CheckBox /> : <CheckBoxOutlineBlank />}
          </IconButton>
        }
      />
      <CardMedia image={todo.image} />
      <CardContent>
        <Typography variant="h6">{todo.description}</Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <Search />
        </IconButton>
        <IconButton>
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TodoView;
