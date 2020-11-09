import React from "react";

import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Todo from "./Todo";
import { Grid, Paper, Typography } from "@material-ui/core";

const StyledPaper = styled(Paper)`
  padding: 8px;
  min-height: 500px;
  margin: 20px;
`;

const Column = ({ column, tasks }) => {
  return (
    <Droppable droppableId={column.id}>
      {(provided) => (
        <Grid
          item
          xs={4}
          container
          spacing={3}
          direction="column"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <StyledPaper elevation={3}>
            <Typography variant="h5" component="h3">
              {column.title}
            </Typography>
            {tasks.map((todo, index) => (
              <Todo key={todo.id} todo={todo} index={index} />
            ))}
            {provided.placeholder}
          </StyledPaper>
        </Grid>
      )}
    </Droppable>
  );
};

export default Column;
