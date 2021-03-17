import React, {useState, useContext} from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import DashboardInner from '../inner/DashboardInner'



export default function Dashboard() {
    
    return (
        <div>
            <Header></Header>
            <div className="mainpage">
                <Sidebar></Sidebar>
                <DashboardInner ></DashboardInner>
           </div>
        </div>
    )
}
