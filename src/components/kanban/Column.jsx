import React from "react";
import styled from "styled-components";
import { Draggable, Droppable } from "react-beautiful-dnd";

import Task from "./Task.jsx";
import AddTask from "./AddTask.jsx";

const Container = styled.div`
  margin: 8px;
  border: 1px solid black;
  border-radius: 2px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5px;
  background-color: white;
`;

const Title = styled.h3`
padding=2px;`;

const TaskList = styled.div`
  padding: 5px;
`;

const Column = (props) => {
  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Title {...provided.dragHandleProps}>{props.column.title}</Title>
          <p>{` Count: ${props.tasks.length}`}</p>
          <Droppable droppableId={props.column.id} type="task">
            {(provided) => (
              <TaskList {...provided.droppableProps} ref={provided.innerRef}>
                {props.tasks.map((task, index) => (
                  <Task
                    key={task.id}
                    task={task}
                    index={index}
                    columnId={props.column.id}
                    state={props.state}
                    setState={props.setState}
                    board={props.board}
                    setBoard={props.setBoard}
                  />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
          <AddTask
            column={props.column}
            board={props.board}
            setBoard={props.setBoard}
          />
        </Container>
      )}
    </Draggable>
  );
};

export default Column;
