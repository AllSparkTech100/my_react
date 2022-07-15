import React from "react";
import "./grid.css"

const GridComp = () => {
    return(
        <div className="grid-container">
            <div className="grid-item">Header</div>
            <div className="grid-item">Navigation</div>
            <div className="grid-item">Main Content</div>
            <div className="grid-item">Aside</div>
            <div className="grid-item">Footer</div>
        </div>
    )
}

export default GridComp