import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import StorageIcon from '@material-ui/icons/Storage';
import React from 'react'
import NewFile from './NewFile'
import './Sidebar.css'
import SidebarItem from './SidebarItem'
function Sidebar() {
    return (
        <div className="sidebar">
         <NewFile></NewFile>
        <div className="side_items">
       <SidebarItem arrow icon ={(<InsertDriveFileIcon/>)} label={"My Drive"} />
       <SidebarItem arrow icon ={(<ImportantDevicesIcon/>)} label={"Computers"} />
       <SidebarItem icon={(<PeopleAltIcon/>)} label={"Shared With Me"} />
       <SidebarItem icon ={(<QueryBuilderIcon/>)} label={"Recent"} />
       <SidebarItem icon={(<StarBorderIcon/>)}  label={"Starred"} />
       <SidebarItem icon ={(<DeleteOutlineIcon/>)} label={"Bin"} />

            <hr/>
            <SidebarItem icon={(<StorageIcon/>)} label={"Storage"} />
        </div> 
            
        </div>
    )
}

export default Sidebar
