import React from "react";
import './menu-item.style.scss'

export const MenuItem = ({ title, subtitle, image, size})=>(
    <div className={"menu-item " + size }>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">{subtitle}</span>
        </div>
    </div>

)