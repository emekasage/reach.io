import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SettingsInner from "../inner/SettingsInner";
import LinkedlnUserInner from "../inner/LinkedlnUserInner";
export default function Settings() {
  return (
    <div>
      <Header></Header>
      <div className="mainpage">
        <Sidebar></Sidebar>
        <SettingsInner></SettingsInner>
      </div>
    </div>
  );
}
