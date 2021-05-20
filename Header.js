import React from 'react'
import './Header.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
function Header({userPhoto}) {
    return (
<div className="header_m">
        <div className="head_logo">
<img  className="h_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_(2020).svg/1200px-Google_Drive_icon_(2020).svg.png" alt="image" />
<h1 className="na">Drive</h1>
</div>

<div className="search_h">
<div className="search_bar">
<SearchIcon />

<input type="text" className="input_h" placeholder="Search in Drive"></input>

<ArrowDropDownIcon  className="down"/>
</div>
</div>

<div className="head_icon">
<HelpOutlineIcon />
<SettingsIcon/>
<AppsIcon />
<Avatar className="user_h" src={userPhoto}  />
</div>
</div>
    )
}

export default Header
