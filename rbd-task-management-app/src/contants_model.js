/* DragDropContext
 ** onDragEnd (isRequired)
 ** onDragStart
 ** onDragUpdate
 */

//---------------------------------------------

//onDragStart = (start) => {}
const start = {
  draggableID: "task-1",
  type: "TYPE",
  source: {
    droppableId: "column-1",
    index: 0,
  },
};

// onDragUpdate = (update) => {}
const update = {
  ...start,
  destination: {
    droppableId: "column-1",
    index: 1,
  },
};

// onDragEnd = (result) => {}
const result = {
  ...update,
  reason: "DROP",
};

//---------------------------------------------

// snapshot Droppable
const snapshotDrop = {
  isDraggingOver: true,
  draggingOverWith: "task-1", //draggagleId
};

// snapshot Draggable
const snapshotDrag = {
  isDragging: true,
  draggingOver: "column-1", //droppableId
};

//---------------------------------------------
