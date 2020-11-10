import React from "react";

import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Todo from "./Todo";
import { Grid, Paper, Typography } from "@material-ui/core";
import { titleize } from "inflected";

const StyledPaper = styled(Paper)`
  padding: 8px;
  min-height: 500px;
`;

const Column = ({ column, tasks }) => {
  return (
    <Droppable droppableId={column.id}>
      {(provided) => (
        <Grid item xs={4} ref={provided.innerRef} {...provided.droppableProps}>
          <StyledPaper elevation={3}>
            <Typography variant="h5" component="h3">
              {titleize(column.title)}
            </Typography>
            <Grid container spacing={1}>
              {tasks.map((todo, index) => (
                <Todo key={todo.id} todo={todo} index={index} />
              ))}
              {provided.placeholder}
            </Grid>
          </StyledPaper>
        </Grid>
      )}
    </Droppable>
  );
};

export default Column;
