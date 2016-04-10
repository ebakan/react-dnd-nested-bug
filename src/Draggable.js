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
    itemType: monitor.getItemType()
  }
}

class Draggable extends Component {
  render() {
    const { connectDragSource, hide, itemType, children } = this.props;
    return connectDragSource(
      <div>
        <div>Drag me</div>
        <div>
          {itemType && !hide && <ConnectedDraggable hide />}
        </div>
      </div>
    )
  }
}

const ConnectedDraggable = DragSource('draggable', source, collect)(Draggable);
export default ConnectedDraggable;
