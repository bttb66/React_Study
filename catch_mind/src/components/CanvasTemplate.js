import React from 'react';
import './CanvasTemplate.css';

const CanvasTemplate = ({canvas, palette}) => {
    return (
        <main className="canvas-template">
            <div className="title">
                <b>Catch mind!</b>
            </div>
            <section className="palette-wrapper">
                {palette}
            </section>
            <section className="canvas-wrapper">
                {canvas}
            </section>
            <br></br>
        </main>
    );
};

export default CanvasTemplate;