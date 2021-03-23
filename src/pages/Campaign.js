import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import CampaignInner from '../inner/CampaignInner'

export default function Campaign() {
    return (
        <div>
            <Header></Header>
            <div className="mainpage">
                <Sidebar></Sidebar>
                <CampaignInner></CampaignInner>
           </div>
        </div>
    )
}
