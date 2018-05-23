import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleCell } from '../actions/universe';

let toSingleValue = ({ x, y }) => {
  return (y*132) + x;
};

class Universe extends Component {
  constructor(props){
    super(props);
    this.isMoseDown = false;
    this.currentCell = { x: -1, y: -1 };
  }
  componentDidMount(){
    const ctx = this.refs.canvas.getContext('2d');
    this.ctx = ctx;
  }
  componentDidUpdate(){
    this.ctx.clearRect(0, 0, 803, 497);
    this.props.cells.forEach((v, ix) => 
    { 
      if(v === true) 
      {
        let y = Math.floor(ix/132);
        let x = ix - (y*132);
        this.ctx.fillRect(x*6, y*6, 5, 5);
      } 
    });
  }

  getCellCoordinatesByPosition(x, y){
    return {
      x: Math.floor(x/6),
      y: Math.floor(y/6)
    };
  }
  
  cellPositionHasChanged(a, b){
    return ! (a.x === b.x && a.y === b.y); 
  }
  handleMoseEvent(e){
    if(this.props.isGameStarted) return;
    let overCell = this.getCellCoordinatesByPosition(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    if(!this.cellPositionHasChanged(this.currentCell, overCell)) return;
    this.props.toggleCell(toSingleValue(overCell));
    this.currentCell = overCell;
  }

  mouseDown(e) {
    this.isMoseDown = true;
    this.handleMoseEvent(e);
  }
  
  mouseUp(e) {
    this.isMoseDown = false;
    this.currentCell = { x: -1, y: -1 };
  }
  
  moseMove(e) {
    if(!this.isMoseDown) return;
    this.handleMoseEvent(e);
  }
  render() {
    return (
      <div>
        <canvas 
          ref="canvas" 
          width="803" 
          height="497" 
          style={{ border: '1px solid #000000' }} 
          onMouseMove={ this.moseMove.bind(this) } 
          onMouseDown= { this.mouseDown.bind(this) }
          onMouseUp= { this.mouseUp.bind(this) }
          onMouseLeave={ this.mouseUp.bind(this) }
        ></canvas>
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    isGameStarted: state.isGameStarted,
    cells: state.cells
  };
};

export default connect(stateToProps, { toggleCell })(Universe);
