import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
  } from "@material-ui/core";

const TodoView = ({ todo }) => {
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

export default TodoView;
