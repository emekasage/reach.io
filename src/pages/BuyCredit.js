import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import BuyCreditInner from "../inner/BuyCreditInner";

export default function BuyCredit() {
  return (
    <div>
      <Header></Header>
      <div className="mainpage">
        BuyCredit
        <Sidebar></Sidebar>
        <BuyCreditInner></BuyCreditInner>
      </div>
    </div>
  );
}
