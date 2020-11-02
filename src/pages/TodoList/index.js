import { Grid, IconButton, Modal } from "@material-ui/core";
import { NoteAdd } from "@material-ui/icons";
import { useState } from "react";


import AddTodo from "./AddTodo";
import TodoView from "./TodoView";
import useTodos from "./useTodos";

const EmptyTodoList = () => "Empty";
const GridPadding = () => <Grid item xs={0} sm={2}></Grid>;

const TodoList = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);

  const handleAddClose = () => setAddModalOpen(false);

  const addTodoClicked = () => setAddModalOpen(true);

  const [todos, modifyTodo] = useTodos({ modifiedCallback: handleAddClose });
  return (
    <Grid container>
      <GridPadding />
      <Grid item xs={12} sm={8}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            {todos.length === 0 && <EmptyTodoList />}
            {todos.map((todo) => (
              <TodoView todo={todo} />
            ))}
          </Grid>
          <Grid>
            <IconButton onClick={addTodoClicked}>
              <NoteAdd />
            </IconButton>
            <Modal open={addModalOpen} onClose={handleAddClose}>
              <AddTodo addTodo={modifyTodo} />
            </Modal>
          </Grid>
        </Grid>
      </Grid>

      <GridPadding />
    </Grid>
  );
};

export default TodoList;
