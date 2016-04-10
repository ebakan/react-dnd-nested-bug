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
    item: monitor.getItem()
  }
}

class Draggable extends Component {
  render() {
    const { connectDragSource, hide, item, children } = this.props;
    return connectDragSource(
      <div>
        <div>Drag me</div>
        <div>
          {item && !hide && <ConnectedDraggable hide />}
        </div>
      </div>
    )
  }
}

const ConnectedDraggable = DragSource('draggable', source, collect)(Draggable);
export default ConnectedDraggable;
