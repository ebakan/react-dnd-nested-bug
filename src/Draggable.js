import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const source = {
  beginDrag(props) {
    return {
      num: Math.random()
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Draggable extends Component {
  render() {
    const { connectDragSource, hide, isDragging, children } = this.props;
    return connectDragSource(
      <div>
        <div>Drag me</div>
        <div style={{marginLeft: '10px'}}>
          {isDragging && !hide && <ConnectedDraggable hide />}
        </div>
      </div>
    )
  }
}

const ConnectedDraggable = DragSource('draggable', source, collect)(Draggable);
export default ConnectedDraggable;
