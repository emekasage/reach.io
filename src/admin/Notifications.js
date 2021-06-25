import React from "react";
import Header from "../components/HeaderAdmin";
import Sidebar from "../components/SidebarAdmin";
import NotificationsInner from "./inner/NotificationsInner";

export default function Notifications() {
  return (
    <div>
      <Header></Header>
      <div className="mainpage">
        <Sidebar></Sidebar>
        <NotificationsInner></NotificationsInner>
      </div>
    </div>
  );
}
