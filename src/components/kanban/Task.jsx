import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

import { API } from "../../api/index";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

const Task = (props) => {
  console.log(props.task);
  const deleteTask = (columnId, index, taskId) => {
    const column = props.board.columns[columnId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(index, 1);

    const tasks = props.board.tasks;
    const { [taskId]: oldTask, ...newTasks } = tasks;
    props.setBoard({
      ...props.board,
      tasks: {
        ...newTasks,
      },
      columns: {
        ...props.board.columns,
        [columnId]: {
          ...column,
          taskIds: newTaskIds,
        },
      },
    });

    API.post("/sheet/deleteCompany", props.task)
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Draggable draggableId={`${props.task.id}`} index={props.index}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {props.task.company_name}
          <span
            onClick={() => {
              deleteTask(props.columnId, props.index, props.task.id);
            }}
          >
            X
          </span>
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
