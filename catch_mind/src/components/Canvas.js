import React, { Component } from 'react';
import './Canvas.css'

var ctx;
var pos = {
    drawable : false,
    X : -1,
    Y : -1
  };
class Canvas extends Component {

    onLoad(){
        ctx = this.canvas.getContext("2d");
    }

    initDraw(event){
        const { color } = this.props;
        ctx.beginPath();
        ctx.strokeStyle = color;
        pos.drawable = true;
        var coors = this.getPosition(event);
        pos.X = coors.X;
        pos.Y = coors.Y;
        ctx.moveTo(pos.X, pos.Y);
    }

    draw (event){
        if(!pos.drawable) return;
        var coors = this.getPosition(event);
        ctx.lineTo(coors.X, coors.Y);
        pos.X = coors.X;
        pos.Y = coors.Y;
        ctx.stroke();
    }

    finishDraw(){
        pos.drawable = false;
        pos.X = -1;
        pos.Y = -1;
    }

    getPosition(event){
        var x = event.pageX - this.canvas.offsetLeft;
        var y = event.pageY - this.canvas.offsetTop;
        return {X : x, Y : y};
    }

    componentDidMount(){
        this.onLoad();
    }

    onClick(){
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.beginPath();
    }

    render(){
        return (
            <div>
                
                <canvas className="canvas" id="canvas" width="500" height="400" 
                    ref={ref => (this.canvas = ref)}
                    onMouseDown={(event)=>{this.initDraw(event);}}
                    onMouseMove={(event)=>{this.draw(event);}}
                    onMouseOut={()=>{this.finishDraw();}}
                    onMouseUp={()=>{this.finishDraw();}}
                >
                </canvas>
                <br></br><br></br>
                <button className="clear-button" id="clear-button" onClick={()=>{this.onClick()}}>지우기</button>
            </div>
        )
    }

    
}

export default Canvas;