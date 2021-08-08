import React from "react";
import ReactDOM from "react-dom";
import "@atlaskit/css-reset";
import inititialData from "./initial-data";
import Column from "./Column";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

class InnerList extends React.PureComponent {
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.column === this.props.column &&
      nextProps.taskMap === this.props.taskMap &&
      nextProps.index === this.props.index
    )
      return false;
    return true;
  }

  render() {
    const { column, taskMap, index } = this.props;
    const tasks = column.taskIds.map((taskId) => taskMap[taskId]);
    return <Column column={column} tasks={tasks} index={index} />;
  }
}

class App extends React.Component {
  state = inititialData;

  onDragEnd = (result) => {
    this.setState({
      homeIndex: null,
    });
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      const newColOrder = Array.from(this.state.columnOrder);
      newColOrder.splice(source.index, 1);
      newColOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        columnOrder: newColOrder,
      };

      this.setState(newState);
      return;
    }

    //column start and column finish,
    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    //case reorder in a column
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    //case drag to other column

    //update task list of column start
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    //update task of column finish
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    this.setState(newState);
  };

  onDragStart = (start) => {
    const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId);
    this.setState({ homeIndex });
  };

  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
        onDragStart={this.onDragStart}
      >
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <Container ref={provided.innerRef} {...provided.droppableProps}>
              {this.state.columnOrder.map((columnId, index) => {
                const column = this.state.columns[columnId];
                // const tasks = column.taskIds.map(
                //   (taskId) => this.state.tasks[taskId]
                // );
                // const isDropDisabled = index < this.state.homeIndex;
                // return (
                //   <Column
                //     key={column.id}
                //     column={column}
                //     tasks={tasks}
                //     // isDropDisabled={isDropDisabled}
                //     index={index}
                //   />
                // );

                return (
                  <InnerList
                    key={column.id}
                    column={column}
                    taskMap={this.state.tasks}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
