import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import UsersInner from '../inner/UsersInner'
export default function Users() {
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
