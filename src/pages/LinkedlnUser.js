import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import LinkedlnUserInner from "../inner/LinkedlnUserInner";

export default function LinkedlnUser() {
  return (
    <div>
      <Header></Header>
      <div className="mainpage">
        <Sidebar></Sidebar>
        <LinkedlnUserInner></LinkedlnUserInner>
      </div>
    </div>
  );
}
