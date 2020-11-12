import React from "react";

import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Todo from "./Todo";
import { Grid, Paper, Typography } from "@material-ui/core";
import { titleize } from "inflected";

const StyledPaper = styled(Paper)`
  padding: 8px;
`;
const DropZone = styled(Grid)`
  min-height: 500px;
`;

const Column = ({ column, tasks }) => {
  return (
    <Grid item xs={4}>
      <StyledPaper elevation={3}>
        <Typography variant="h5" component="h3">
          {titleize(column.title)}
        </Typography>
        <Droppable droppableId={column.id}>
          {(provided) => (
            <DropZone
              container
              spacing={1}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {tasks.map((todo, index) => (
                <Todo key={todo.id} todo={todo} index={index} />
              ))}
              {provided.placeholder}
            </DropZone>
          )}
        </Droppable>
      </StyledPaper>
    </Grid>
  );
};

export default Column;
