import React, { Component } from 'react';
import Draggable from './Draggable';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

export default class App extends Component {
  render() {
    return (
      <div>
        <Draggable />
        <Draggable />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
