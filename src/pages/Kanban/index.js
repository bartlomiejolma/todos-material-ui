import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

const Column = ({column, tasks}) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {task.title}
        </Container>
      )}
    </Draggable>
  );
};

const groupTodos = (todos) => {
  return todos.reduce(
    (groups, todo) => {
      const group = todo.group || "Backlog";
      groups[group] = groups[group] || [];
      groups[group].push(todo);
      return groups;
    },
    { Backlog: [], "In progress": [] }
  );
};
const Kanban = () => {
  const todos = useSelector((state) => state.todos) || [];

  const groupedTodos = groupTodos(todos);
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {Object.entries(groupedTodos).map(([group, tasks]) => (
        <Column column={{ title: group }} tasks={tasks} />
      ))}
    </DragDropContext>
  );
};

export default Kanban;
