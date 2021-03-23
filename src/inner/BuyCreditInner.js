import React ,{useContext, useState} from 'react'
import {providerFunctions} from "../provider/FunctionsProvider"

export default function BuyCreditInner() {
	
	const {
        showSideBar
    } = useContext(providerFunctions)
	
    return (
        <div className={`pagebody ${showSideBar ? "":"expand"}`}>
            <div className="dashboardbox">

            <main className="content">
				<div className="container-fluid p-0">
Buy Credit
				</div>
			</main>
            </div>


        </div>
    )
}
