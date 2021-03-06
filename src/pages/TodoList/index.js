import { Grid, IconButton, Modal } from "@material-ui/core";
import { NoteAdd } from "@material-ui/icons";
import { useState } from "react";

import AddTodo from "./AddTodo";
import TodoView from "./TodoView";
import useTodos from "./useTodos";
import EmptyTodoList from "./EmptyTodoList";

const GridPadding = () => <Grid item xs={0} sm={2}></Grid>;

const TodoList = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);

  const handleAddClose = () => setAddModalOpen(false);

  const addTodoClicked = () => setAddModalOpen(true);

  const [todos, modifyTodo, deleteTodo] = useTodos();
  return (
    <Grid container>
      <GridPadding />
      <Grid item xs={12} sm={8}>
        <Grid container direction="column" spacing={2}>
          <Grid item container direction="column" spacing={2}>
            {todos.length === 0 && <EmptyTodoList />}
            {todos.map((todo) => (
              <Grid item>
                <TodoView
                  todo={todo}
                  modifyTodo={modifyTodo}
                  deleteTodo={deleteTodo}
                />
              </Grid>
            ))}
          </Grid>
          <Grid>
            <IconButton onClick={addTodoClicked}>
              <NoteAdd />
            </IconButton>
            <Modal open={addModalOpen} onClose={handleAddClose}>
              <AddTodo addTodo={modifyTodo} done={handleAddClose} />
            </Modal>
          </Grid>
        </Grid>
      </Grid>

      <GridPadding />
    </Grid>
  );
};

export default TodoList;
