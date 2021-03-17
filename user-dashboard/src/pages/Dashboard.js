import React, {useState, useContext} from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import DashboardInner from '../inner/DashboardInner'



export default function Dashboard() {
    
    const [dashboardData, setDashboardData] = useState([12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1])
    return (
        <div>
            <Header></Header>
            <div className="mainpage">
                <Sidebar></Sidebar>
                <DashboardInner dashboardData = {dashboardData}    ></DashboardInner>
           </div>
        </div>
    )
}
