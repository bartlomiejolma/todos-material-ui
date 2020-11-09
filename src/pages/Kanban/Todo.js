import React from "react";

import { Draggable } from "react-beautiful-dnd";

import { Card, CardContent, Grid, Typography } from "@material-ui/core";

const Todo = ({ todo, index }) => {
  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <Grid
          item
          xs={12}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                {todo.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      )}
    </Draggable>
  );
};

export default Todo;
