import React from "react";
import styled from "styled-components";
import Task from "./Task";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.5s ease;
  background-color: ${(props) =>
    props.isDraggingOVer ? "skyblue" : "inherit"};
  flex-grow: 1;
`;

class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.tasks === this.props.tasks) return false;
    return true;
  }

  render() {
    return this.props.tasks.map((task, index) => (
      <Task key={task.id} task={task} index={index} />
    ));
  }
}

export default class Column extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {(provided) => (
          <Container {...provided.draggableProps} ref={provided.innerRef}>
            <Title {...provided.dragHandleProps}>
              {this.props.column.title}
            </Title>
            <Droppable
              type="task"
              droppableId={this.props.column.id}
              isDropDisabled={this.props.isDropDisabled}
              // direction="horizontal"
              //can only move item between columns if they share same type. ex below: move tasks between col 1, 2. cant move to col 3
              // type={this.props.column.id === 'column-3' ? 'done' : 'active'}
            >
              {(provided, snapshot) => (
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOVer={snapshot.isDraggingOver}
                >
                  <InnerList tasks={this.props.tasks} />
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    );
  }
}
