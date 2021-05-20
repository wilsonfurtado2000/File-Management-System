import React from 'react'
import AddIcon from '@material-ui/icons/Add';
function SideIcons() {
    return (
        <div className='sideIcons'>
        <div className="sideIcons__top">
            <img className="i_i" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_(2020).svg/1200px-Google_Calendar_icon_(2020).svg.png" alt="Google Calendar" />
            <img className="i_i" src="https://assets.materialup.com/uploads/64f5506e-2577-4d19-9425-11a1e1fa31a8/0x0ss-85.jpg" alt="Google Keep" />
            <img className="i_i" src="https://www.androidpolice.com/wp-content/uploads/2018/03/nexus2cee_new-tasks-icon.png" alt="Google Tasks" />
        </div>

        <hr />

        <div className="sideIcons__plusIcon">
            <AddIcon />
        </div>
    </div>
    )
}

export default SideIcons
