import React from "react";

import { Draggable } from "react-beautiful-dnd";

import { Card, CardContent, Typography } from "@material-ui/core";

const Todo = ({ todo, index }) => {
  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CardContent>
            <Typography variant="h5" component="h2">
              {todo.title}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
};

export default Todo;
