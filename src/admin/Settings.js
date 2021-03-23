import React, {useState, useContext} from 'react'
import Header from '../components/Header'
import Sidebar from '../components/SidebarAdmin'
import SettingsInner from './inner/SettingsInner'



export default function Settings() {
    
    const [dashboardData, setDashboardData] = useState([12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1])
    return (
        <div>
            <Header></Header>
            <div className="mainpage">
                Settings
                <Sidebar></Sidebar>
                <SettingsInner dashboardData = {dashboardData}    ></SettingsInner>
           </div>
        </div>
    )
}
