import React from 'react';
import './Palette.css';

const Color = ({color, active, onClick}) => {
    return(
        <div className={`color ${active && 'active'}`}
            style={{ background: color }}
            onClick={onClick}>
        </div>
    );
}

const Palette = ({colors, selected, onSelect}) => {
    const palette = colors.map(
        (color) => (
            <Color
                color={color}
                active={color === selected ? true : false}
                onClick={()=>onSelect(color)}
                key={color}
            />
        )
    );

    return (
        <div className="palette">
            {palette}
        </div>
    );
};

export default Palette;
