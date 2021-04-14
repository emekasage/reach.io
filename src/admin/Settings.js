import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/SidebarAdmin";
import SettingsInner from "./inner/SettingsInner";

export default function Settings() {
  return (
    <div>
      <Header></Header>
      <div className="mainpage">
        Settings
        <Sidebar></Sidebar>
        <SettingsInner></SettingsInner>
      </div>
    </div>
  );
}
