import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/SidebarAdmin'
import ClientsInner from './inner/ClientsInner'
export default function Clients() {
    return (
        <div>
            <Header></Header>
            <div className="mainpage">
                <Sidebar></Sidebar>
                <ClientsInner></ClientsInner>
           </div>
        </div>
    )
}
