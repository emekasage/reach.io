import React, {useState, useContext} from 'react'
import Header from '../components/Header'
import Sidebar from '../components/SidebarAdmin'
import CampaignInner from './inner/CampaignInner'



export default function Campaign() {
    
    const [dashboardData, setDashboardData] = useState([12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1])
    return (
        <div>
            <Header></Header>
            <div className="mainpage">
                Campaign
                <Sidebar></Sidebar>
                <CampaignInner dashboardData = {dashboardData}    ></CampaignInner>
           </div>
        </div>
    )
}
