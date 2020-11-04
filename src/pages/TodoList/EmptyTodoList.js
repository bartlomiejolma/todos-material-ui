import React from "react";
import { Container, Typography } from "@material-ui/core";
import styled from "styled-components";

const MessageContainer = styled(Container)`
    margin-top: 10px;
`;

const EmptyTodoList = () => {
  return (
    <MessageContainer>
      <Typography variant="h5">Todo List is empty, add new Todos</Typography>
    </MessageContainer>
  );
};

export default EmptyTodoList;
