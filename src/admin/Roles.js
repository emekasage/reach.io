import React from "react";
import Header from "../components/HeaderAdmin";
import Sidebar from "../components/SidebarAdmin";
import RolesInner from "./inner/RolesInner";
export default function Roles() {
  return (
    <div>
      <Header></Header>
      <div className="mainpage">
        <Sidebar></Sidebar>
        <RolesInner></RolesInner>
      </div>
    </div>
  );
}
