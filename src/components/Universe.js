import React, { Component } from 'react'

export default class Universe extends Component {
  constructor(props){
    super(props);
    this.isMoseDown = false;
    this.currentCell = { x: 0, y: 0 };
  }

  componentDidMount(){
    const ctx = this.refs.canvas.getContext('2d');
    this.ctx = ctx;
    // for (let x = 0; x < 134; x++) {  
    //   for(let y = 0; y < 83; y++){
    //     this.ctx.fillRect(x*6, y*6, 5, 5);
    //   }
    // }
  }
  componentDidUpdate(){

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
    // let overCell = this.getCellCoordinatesByPosition(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    // if(!this.cellPositionHasChanged(this.currentCell, overCell)) return;
    // this.currentCell = overCell;
    //this.ctx.fillRect(this.currentCell.x*6, this.currentCell.y*6, 5, 5);
  }

  mouseDown(e) {
    this.isMoseDown = true;
    this.handleMoseEvent(e);
  }
  
  mouseUp(e) {
    this.isMoseDown = false;
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
    )
  }
}
