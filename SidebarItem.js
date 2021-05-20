import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import './SidebarItem.css';
function SidebarItem({arrow,icon,label}) {
    return (
        <div className="side_item">
            <div className="side_arrow">
                {arrow && (<ArrowRightIcon />) }
            </div>
            <div className="side_main">
                {icon}
                <p>{label}</p>
            </div>
        </div>
    )
}

export default SidebarItem 
