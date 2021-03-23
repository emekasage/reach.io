import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import AdminInner from '../inner/AdminInner'

export default function Admin() {
    return (
        <div>
            <Header></Header>
            <div className="mainpage">
                <Sidebar></Sidebar>
                <AdminInner></AdminInner>
           </div>
        </div>
    )
}
