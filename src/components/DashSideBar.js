import React from 'react';
import"./DashSideBar.css";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';
import SideBarRow from "./SideBarRow";
import ScheduleIcon from '@material-ui/icons/Schedule';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';


function DashSidebar ()  {
    return (
        <div className="sidebar">
           <SideBarRow selected Icon={DashboardTwoToneIcon}  title="Dashboard"  />
            <SideBarRow Icon={MailOutlineIcon} title="Message" />
            <SideBarRow Icon={ScheduleIcon} title="Schedule" />
            <SideBarRow Icon={HistoryIcon} title="History" />
            <SideBarRow Icon={SettingsIcon} title="Setting" /> 
            
        </div>
    ); 
}

export default DashSidebar;
