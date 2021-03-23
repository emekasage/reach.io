import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import UsersInner from '../inner/ConnectionsInner'

export default function Connections() {
    return (
        <div>
            <Header></Header>
            <div className="mainpage">
                <Sidebar></Sidebar>
                <UsersInner></UsersInner>
           </div>
        </div>
    )
}
