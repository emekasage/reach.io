import React from "react";
import Header from "../components/HeaderAdmin";
import Sidebar from "../components/SidebarAdmin";
import CampaignInner from "./inner/CampaignInner";

export default function Campaign() {
  return (
    <div>
      <Header></Header>
      <div className="mainpage">
        Campaign
        <Sidebar></Sidebar>
        <CampaignInner></CampaignInner>
      </div>
    </div>
  );
}
