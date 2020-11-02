import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Delete, Search } from "@material-ui/icons";

const TodoView = ({ todo }) => {
  return (
    <Card>
      <CardHeader title={todo.title} />
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
