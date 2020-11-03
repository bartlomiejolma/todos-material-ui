import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  IconButton,
  Modal,
} from "@material-ui/core";
import {
  CheckBox,
  CheckBoxOutlineBlank,
  Delete,
  Search,
} from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";

import AddTodo from "./AddTodo";

const StyledCardMedia = styled(CardMedia)`
  height: 100px;
`

const TodoView = ({ todo, modifyTodo, deleteTodo }) => {
  const toggleCompleted = () => {
    todo.completed = !todo.completed;
    modifyTodo(todo);
  };

  const [editModalOpen, setEditModalOpen] = useState(false);

  const handleEditClose = () => setEditModalOpen(false);

  const editTodoClicked = () => setEditModalOpen(true);

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
      <StyledCardMedia image={todo.images[0]} />
      <CardContent>
        <Typography variant="h6">{todo.description}</Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={editTodoClicked}>
          <Search />
        </IconButton>
        <IconButton onClick={() => deleteTodo(todo)}>
          <Delete />
        </IconButton>
      </CardActions>
      <Modal open={editModalOpen} onClose={handleEditClose}>
        <AddTodo addTodo={modifyTodo} todo={todo} done={handleEditClose} />
      </Modal>
    </Card>
  );
};

export default TodoView;
