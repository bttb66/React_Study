import React, { Component } from 'react';
import './Canvas.css'

var ctx, context;
var pos = {
    drawable : false,
    X : -1,
    Y : -1
  };
class Canvas extends Component {

    onLoad(){
        ctx = this.canvas.getContext("2d");
        context=this;
        // this.canvas.addEventListener("mousedown", this.listener);
        // this.canvas.addEventListener("mousemove", this.listener);
        // this.canvas.addEventListener("mouseout", this.listener);
        // this.canvas.addEventListener("mouseup", this.listener);

    }

    initDraw(event){
        ctx.beginPath();
        pos.drawable = true;
        var coors = context.getPosition(event);
        pos.X = coors.X;
        pos.Y = coors.Y;
        ctx.moveTo(pos.X, pos.Y);
    }

    draw (event){
        if(!pos.drawable) return;
        var coors = context.getPosition(event);
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
        ctx.clearRect(0, 0, context.canvas.width, context.canvas.height);
        ctx.beginPath();
    }
/*ref={(input) => { this.textInput = input; }}*/
    render(){
        return (
            <div>
                
                <canvas className="canvas" id="canvas" width="500" height="500" 
                    ref={ref => (this.canvas = ref)}
                    onMouseDown={(event)=>{this.initDraw(event);}}
                    onMouseMove={(event)=>{this.draw(event);}}
                    onMouseOut={()=>{this.finishDraw();}}
                    onMouseUp={()=>{this.finishDraw();}}
                >
                
                </canvas>
                <br></br>
                <button className="clear-button" id="clear-button" onClick={this.onClick}>지우기</button>
            </div>
        )
    }

    
}

export default Canvas;